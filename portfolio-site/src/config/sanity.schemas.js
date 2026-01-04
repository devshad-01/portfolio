/**
 * Sanity Schema Definitions
 * 
 * These schemas define the content structure for your portfolio in Sanity CMS.
 * 
 * To use these schemas:
 * 1. Create a new Sanity project: `npm create sanity@latest`
 * 2. Copy these schema definitions to your Sanity project's `schemas` folder
 * 3. Import and add them to your schema.js file
 * 
 * For more info: https://www.sanity.io/docs/schema-types
 */

// ==================== PROJECT SCHEMA ====================
export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'problem',
      title: 'Problem Statement',
      type: 'text',
      rows: 3,
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 3,
    },
    {
      name: 'learnings',
      title: 'Key Learnings',
      type: 'text',
      rows: 3,
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Full Stack', value: 'fullstack' },
          { title: 'Backend', value: 'backend' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Mobile', value: 'mobile' },
        ],
      },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Year, New',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'thumbnail',
    },
  },
};

// ==================== WORK EXPERIENCE SCHEMA ====================
export const workExperienceSchema = {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Mission', value: 'Mission' },
          { title: 'Freelance', value: 'Freelance' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'role',
    },
  },
};

// ==================== EDUCATION SCHEMA ====================
export const educationSchema = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'field',
      title: 'Field of Study',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'current',
      title: 'Currently Enrolled',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'institution',
      subtitle: 'degree',
    },
  },
};

// ==================== CERTIFICATION SCHEMA ====================
export const certificationSchema = {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Certification Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'issuer',
      title: 'Issuing Organization',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Issue Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
    },
    {
      name: 'credentialId',
      title: 'Credential ID',
      type: 'string',
    },
    {
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Badge Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'issuer',
      media: 'image',
    },
  },
};

// ==================== SKILL SCHEMA ====================
export const skillSchema = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Backend', value: 'Backend' },
          { title: 'Frontend', value: 'Frontend' },
          { title: 'DevOps & Cloud', value: 'DevOps & Cloud' },
          { title: 'Databases', value: 'Databases' },
          { title: 'Tools', value: 'Tools' },
        ],
      },
    },
    {
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      options: {
        list: [
          { title: 'Beginner', value: 1 },
          { title: 'Intermediate', value: 2 },
          { title: 'Advanced', value: 3 },
          { title: 'Expert', value: 4 },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
};

// ==================== PROFILE SCHEMA ====================
export const profileSchema = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 3,
    },
    {
      name: 'journey',
      title: 'My Journey',
      type: 'text',
      rows: 4,
    },
    {
      name: 'current',
      title: 'What I\'m Doing Now',
      type: 'text',
      rows: 3,
    },
    {
      name: 'interests',
      title: 'Beyond Code',
      type: 'text',
      rows: 3,
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'avatar',
    },
  },
};

// Export all schemas
export const schemas = [
  projectSchema,
  workExperienceSchema,
  educationSchema,
  certificationSchema,
  skillSchema,
  profileSchema,
];
