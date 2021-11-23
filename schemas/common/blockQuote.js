export default {
  name: "blockquote",
  title: "Blockquote",
  type: 'object',
  fields: [
    {
      title: 'Quote Text',
      name: 'quoteText',
      type: 'text'
    },
    {
      title: 'Quote Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Quote Author Title ',
      name: 'authorTitle',
      type: 'string'
    },
    {
      title: 'Quote Image',
      name: 'quoteImage',
      type: 'defaultImage'
    }
  ]
}