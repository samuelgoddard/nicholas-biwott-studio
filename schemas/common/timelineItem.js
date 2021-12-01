export default {
  name: "timelineItem",
  title: "timelineItem",
  type: 'object',
  fields: [
    {
      title: 'Year',
      name: 'timelineItemYear',
      description: 'The date range of this item, eg: "1940" or "1948-1952"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'timelineItemText',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}