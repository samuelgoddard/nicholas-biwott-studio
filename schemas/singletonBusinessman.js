export default {
  title: 'Businessman',
  name: 'businessman',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'hero'
    },
    {
      title: 'Section 1 Heading',
      name: 'section1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 1 Image',
      name: 'section1Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 1 Text',
      name: 'section1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 2 Heading',
      name: 'section2Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 2 Image',
      name: 'section2Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 2 Text',
      name: 'section2Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Quote',
      name: 'section3Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 4 Heading',
      name: 'section4Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 4 Image',
      name: 'section4Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 4 Text',
      name: 'section4Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}