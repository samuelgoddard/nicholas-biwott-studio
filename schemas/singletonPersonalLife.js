export default {
  title: 'Personal Life',
  name: 'personalLife',
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
      title: 'Section 1 Quote',
      name: 'section1Qutoe',
      type: 'blockquote',
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
      title: 'Section 3 Heading',
      name: 'section3Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Video Embed',
      name: 'section3VideoEmbed',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Video Caption',
      name: 'section3VideoCaption',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section 3 Quote',
      name: 'section3Quote',
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