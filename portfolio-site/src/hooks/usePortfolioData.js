/**
 * Custom hooks for fetching portfolio data
 * 
 * These hooks provide a clean interface for data fetching.
 * Currently uses local data, but can be switched to Sanity by:
 * 1. Configuring Sanity in src/config/sanity.js
 * 2. Uncommenting the Sanity fetch logic below
 */

import { useState, useEffect } from 'react';
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
 * Generic data fetcher hook
 * Uses local data by default, switches to Sanity when configured
 */
function useData(localData, sanityQuery, transform = (data) => data) {
  const [data, setData] = useState(() => localData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSanityConfigured()) {
      setLoading(true);
      sanityClient
        .fetch(sanityQuery)
        .then((result) => {
          const transformed = transform(result);
          setData(prevData => {
            // Only update if data actually changed
            if (JSON.stringify(prevData) !== JSON.stringify(transformed)) {
              return transformed;
            }
            return prevData;
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error('Sanity fetch error:', err);
          setError(err);
          // Only fallback to local data if we don't have any data yet
          setData(prevData => {
            if (!prevData || prevData.length === 0) {
              return localData;
            }
            return prevData;
          });
          setLoading(false);
        });
    } else {
      // Use local data when Sanity is not configured
      setData(prevData => {
        if (JSON.stringify(prevData) !== JSON.stringify(localData)) {
          return localData;
        }
        return prevData;
      });
    }
  }, [sanityQuery, transform]); // Remove localData from deps to prevent re-renders

  return { data, loading, error };
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
  return useData(aboutData, queries.profile);
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
