/**
 * Sanity CMS Configuration
 * 
 * Environment Variables Required:
 * - VITE_SANITY_PROJECT_ID: Your Sanity project ID
 * - VITE_SANITY_DATASET: Dataset name (default: production)
 * - VITE_SANITY_API_TOKEN: Optional read token for private datasets
 */

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Get environment variables
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

/**
 * Check if Sanity is configured
 */
export function isSanityConfigured() {
  return Boolean(projectId && projectId.length > 0);
}

// Create the Sanity client
export const sanityClient = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true, // Set to false for real-time data
  // token: import.meta.env.VITE_SANITY_API_TOKEN, // Uncomment for private datasets
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  // If source is already a URL string, return it as-is
  if (typeof source === 'string') {
    return { url: () => source };
  }
  // Handle Sanity image reference
  try {
    return builder.image(source);
  } catch (e) {
    console.error('urlFor error:', e);
    return null;
  }
}

/**
 * Fetch data from Sanity with fallback
 */
export async function fetchFromSanity(query, params = {}) {
  if (!isSanityConfigured()) {
    console.log('Sanity not configured - using local data');
    return null;
  }
  
  try {
    return await sanityClient.fetch(query, params);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}

/**
 * GROQ Queries
 */
export const queries = {
  // All projects
  projects: `*[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    featured,
    techStack,
    githubUrl,
    liveUrl,
    "thumbnail": thumbnail.asset->url,
    year,
    category
  }`,

  // Featured projects only
  featuredProjects: `*[_type == "project" && featured == true] | order(year desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    techStack,
    githubUrl,
    liveUrl,
    "thumbnail": thumbnail.asset->url,
    year
  }`,

  // Work experience
  workExperience: `*[_type == "workExperience"] | order(startDate desc) {
    _id,
    company,
    role,
    type,
    startDate,
    endDate,
    current,
    description,
    technologies
  }`,

  // Education
  education: `*[_type == "education"] | order(endDate desc) {
    _id,
    institution,
    degree,
    field,
    startDate,
    endDate,
    current,
    description,
    achievements
  }`,

  // Certifications
  certifications: `*[_type == "certification"] | order(date desc) {
    _id,
    name,
    issuer,
    date,
    expiryDate,
    credentialId,
    credentialUrl,
    "image": image.asset->url
  }`,

  // Skills
  skills: `*[_type == "skill"] | order(category, name) {
    _id,
    name,
    category,
    proficiency
  }`,

  // Profile/About
  profile: `*[_type == "profile"][0] {
    _id,
    name,
    title,
    bio,
    intro,
    journey,
    current,
    interests,
    "avatar": avatar.asset->url,
    "resume": resume.asset->url,
    email,
    github,
    linkedin,
    twitter
  }`,
};

export default sanityClient;
