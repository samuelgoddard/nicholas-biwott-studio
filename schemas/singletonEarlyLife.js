export default {
  title: 'Early Life',
  name: 'earlyLife',
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
      title: 'Section 1 Left Text',
      name: 'section1LeftText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 1 Right Text',
      name: 'section1RightText',
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
      title: 'Section 2 Left Text',
      name: 'section2LeftText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Heading',
      name: 'section3Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Text',
      name: 'section3Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Image',
      name: 'section3Image',
      type: 'defaultImage',
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