import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'documentCategory',
  type: 'object',
  title: 'Document Category',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
