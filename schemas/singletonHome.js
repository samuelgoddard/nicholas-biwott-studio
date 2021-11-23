export default {
  title: 'Home',
  name: 'home',
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
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage'
    },
    {
      title: 'Hero Word 1',
      name: 'heroWord1',
      type: 'string',
      description: "The 3 words that appear in the hero, eg: 'Statesman', 'Entrepeneur', 'Humanitarian'",
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Word 2',
      name: 'heroWord2',
      type: 'string'
    },
    {
      title: 'Hero Word 3',
      name: 'heroWord3',
      type: 'string',
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      description: "The block of supporting text in the hero",
      type: 'text',
    },
    {
      title: 'Supporting Content Image',
      name: 'supportingContentImage',
      type: 'defaultImage'
    },
    {
      title: 'Supporting Content',
      name: 'supportingContent',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Supporting Quote',
      name: 'supportingQuote',
      type: 'blockquote'
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