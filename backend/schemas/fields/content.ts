import {defineField} from 'sanity'

export default defineField({
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
  ],
})
