import {defineField, defineType} from 'sanity'
import {MdOutlineArticle} from 'react-icons/md'
export default defineType({
  name: 'documentation',
  title: 'Documentation',
  type: 'document',
  icon: MdOutlineArticle,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
