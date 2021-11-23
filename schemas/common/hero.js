export default {
  name: "hero",
  title: "Hero",
  type: 'object',
  fields: [
    {
      title: 'Hero Meta Text',
      description: "The line that appears before the 3 words, eg: 'Early Life'",
      name: 'heroMetaText',
      type: 'string'
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
      title: 'Hero Quote',
      name: 'heroQuote',
      type: 'blockquote',
    }
  ]
}