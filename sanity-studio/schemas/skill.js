import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Languages', value: 'Languages'},
          {title: 'Frameworks', value: 'Frameworks'},
          {title: 'Databases', value: 'Databases'},
          {title: 'Cloud & DevOps', value: 'Cloud & DevOps'},
          {title: 'Tools', value: 'Tools'},
          {title: 'Other', value: 'Other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      description: '1-5 scale (5 being expert)',
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
