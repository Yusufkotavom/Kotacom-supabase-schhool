import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'published',
      type: 'date',
      required: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
    },
    {
      name: 'coverImage',
      type: 'text', // URL for simplicity
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'body',
      type: 'textarea', // can contain md or html
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
    },
  ],
}
