import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    pagination: {
      defaultLimit: 50,
      limits: [25, 50, 100, 200],
    },
  },
  versions: false, // Disable versioning completely
  access: {
    read: () => true, // Allow public read access
    create: () => true,
    update: () => true,
    delete: () => true,
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
      name: 'category',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'country',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'locale',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
    },
    {
      name: 'price',
      type: 'text',
    },
    {
      name: 'published',
      type: 'date',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
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
