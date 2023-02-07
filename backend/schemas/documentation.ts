import {defineField, defineType} from 'sanity'
import {MdOutlineArticle} from 'react-icons/md'
import content from './fields/content'
import documentCategory from './objects/document-category'
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
    defineField({
      name: 'category',
      type: 'reference',
      to: [documentCategory],
    }),
    content,
  ],
})
