export default {
  title: 'Public Servant',
  name: 'publicServant',
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

    // Sixties
    {
      title: 'Sixties: Section 1 Heading',
      name: 'sixtiesSection1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 1 Text',
      name: 'sixtiesSection1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 1 Image',
      name: 'sixtiesSection1Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 1 Text Right',
      name: 'sixtiesSection1TextRight',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 2 Quote',
      name: 'sixtiesSection2Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 3 Text',
      name: 'sixtiesSection3Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 3 Image',
      name: 'sixtiesSection3Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Sixties: Section 4 Quote',
      name: 'sixtiesSection4Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },

    // Seventies
    {
      title: 'Seventies: Section 1 Heading',
      name: 'seventiesSection1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 1 Image',
      name: 'seventiesSection1Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 1 Text',
      name: 'seventiesSection1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 1 Quote',
      name: 'seventiesSection1Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 2 Heading',
      name: 'seventiesSection2Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 2 Text',
      name: 'seventiesSection2Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 2 Image',
      name: 'seventiesSection2Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Seventies: Section 3 Quote',
      name: 'seventiesSection3Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },

    // Eighties
    {
      title: 'Eighties: Section 1 Heading',
      name: 'eightiesSection1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Eighties: Section 1 Image',
      name: 'eightiesSection1Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Eighties: Section 1 Text',
      name: 'eightiesSection1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Eighties: Section 2 Quote',
      name: 'eightiesSection2Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    
    // Nineties
    {
      title: 'Nineties: Section 1 Heading',
      name: 'ninetiesSection1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 1 Text',
      name: 'ninetiesSection1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 1 Text Right',
      name: 'ninetiesSection1TextRight',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 2 Quote',
      name: 'ninetiesSection2Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 3 Heading',
      name: 'ninetiesSection3Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 3 Text',
      name: 'ninetiesSection3Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 3 Image',
      name: 'ninetiesSection3Image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 4 Quote 1',
      name: 'ninetiesSection4Quote1',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Ninteies: Section 4 Quote 2',
      name: 'ninetiesSection4Quote2',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 4 Quote Heading',
      name: 'ninetiesSection4QuoteHeading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 4 Quote Author',
      name: 'ninetiesSection4QuoteAuthor',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 4 Quote Author Title',
      name: 'ninetiesSection4QuoteAuthorTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 5 Heading',
      name: 'ninetiesSection5Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 5 Text',
      name: 'ninetiesSection5Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Nineties: Section 6 Quote',
      name: 'ninetiesSection6Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },

    // Noughties
    {
      title: 'Noughties: Section 1 Heading',
      name: 'noughtiesSection1Heading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Text',
      name: 'noughtiesSection1Text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Quote Heading',
      name: 'noughtiesSection1QuoteHeading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Quote Author',
      name: 'noughtiesSection1QuoteAuthor',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Quote Author Title',
      name: 'noughtiesSection1QuoteAuthorTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Quote',
      name: 'noughtiesSection1Quote',
      type: 'blockquote',
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 1 Text Right',
      name: 'noughtiesSection1TextRight',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Noughties: Section 2 Quote',
      name: 'noughtiesSection2Quote',
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