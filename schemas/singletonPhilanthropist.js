export default {
  title: 'Philanthropist',
  name: 'philanthropist',
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
      title: 'Section 1.5 Heading',
      name: 'section15Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 1.5 Text',
      name: 'section15Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 2 Quote',
      name: 'section2Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Heading',
      name: 'section3Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Image',
      name: 'section3Image',
      type: 'defaultImage',
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
      title: 'Section 4 Text',
      name: 'section4Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 4 Quote',
      name: 'section4Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 5 Heading',
      name: 'section5Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 5 Image',
      name: 'section5Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 5 Text',
      name: 'section5Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 6 Quote',
      name: 'section6Quote',
      type: 'blockquote',
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