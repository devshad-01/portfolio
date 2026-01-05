/**
 * Custom hooks for fetching portfolio data
 * 
 * These hooks provide a clean interface for data fetching.
 * Uses Sanity when configured, falls back to local data.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { isSanityConfigured, sanityClient, queries } from '../config/sanity';
import { 
  projectsData, 
  workExperienceData,
  educationData,
  certificationsData,
  skillsData, 
  aboutData, 
  contactInfo 
} from '../data/portfolio';

/**
 * Generic data fetcher hook - FIXED to prevent glitching
 * Only shows local data initially, then switches to Sanity data once loaded
 */
function useData(localData, sanityQuery, transform = (data) => data) {
  const [data, setData] = useState(null); // Start with null to show loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);
  const transformRef = useRef(transform);
  transformRef.current = transform;

  useEffect(() => {
    // Only fetch once
    if (hasFetched.current) return;
    hasFetched.current = true;

    if (isSanityConfigured()) {
      sanityClient
        .fetch(sanityQuery)
        .then((result) => {
          // If Sanity returns null or empty, use local data
          if (result === null || result === undefined || 
              (Array.isArray(result) && result.length === 0) ||
              (typeof result === 'object' && !Array.isArray(result) && Object.keys(result).length === 0)) {
            setData(localData);
          } else {
            setData(transformRef.current(result));
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error('Sanity fetch error:', err);
          setError(err);
          setData(localData); // Fallback to local data
          setLoading(false);
        });
    } else {
      // No Sanity configured, use local data immediately
      setData(localData);
      setLoading(false);
    }
  }, [sanityQuery, localData]);

  // Return local data while loading to prevent blank screens
  return { 
    data: data ?? localData, 
    loading, 
    error,
    isFromSanity: data !== null && data !== localData
  };
}

/**
 * Fetch all projects
 */
export function useProjects() {
  return useData(projectsData, queries.projects);
}

/**
 * Fetch featured projects only
 */
export function useFeaturedProjects() {
  const featuredLocal = projectsData.filter(p => p.featured);
  return useData(featuredLocal, queries.featuredProjects);
}

/**
 * Fetch a single project by slug
 */
export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSanityConfigured()) {
      sanityClient
        .fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug })
        .then((result) => {
          setProject(result);
          setLoading(false);
        })
        .catch(() => {
          // Fallback to local
          setProject(projectsData.find(p => p.slug === slug) || null);
          setLoading(false);
        });
    } else {
      setProject(projectsData.find(p => p.slug === slug) || null);
      setLoading(false);
    }
  }, [slug]);

  return { project, loading };
}

/**
 * Fetch work experience
 */
export function useWorkExperience() {
  return useData(workExperienceData, queries.workExperience);
}

/**
 * Fetch education data
 */
export function useEducation() {
  return useData(educationData, queries.education);
}

/**
 * Fetch certifications
 */
export function useCertifications() {
  return useData(certificationsData, queries.certifications);
}

/**
 * Fetch skills grouped by category
 */
export function useSkills() {
  return useData(skillsData, queries.skills);
}

/**
 * Fetch about/profile information
 */
export function useAbout() {
  return useData(aboutData, queries.profile, (data) => {
    if (!data) return aboutData;
    return {
      name: data.name || aboutData.name,
      title: data.title || aboutData.title,
      intro: data.intro || data.bio || aboutData.intro,
      journey: data.journey || aboutData.journey,
      current: data.current || aboutData.current,
      interests: data.interests || aboutData.interests,
      avatar: data.avatar || aboutData.avatar,
      resume: data.resume || aboutData.resume,
    };
  });
}

/**
 * Fetch contact information
 */
export function useContact() {
  return useData(contactInfo, queries.profile, (data) => ({
    email: data?.email || contactInfo.email,
    github: data?.github || contactInfo.github,
    linkedin: data?.linkedin || contactInfo.linkedin,
    twitter: data?.twitter || contactInfo.twitter,
  }));
}
