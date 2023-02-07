import {defineField} from 'sanity'

import {TbFileSymlink} from 'react-icons/tb'

export default defineField({
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: TbFileSymlink,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{type: 'documentation'}],
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'link',
                type: 'url',
                title: 'Link',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'code',
    },
    {
      type: 'image',
    },
  ],
})
