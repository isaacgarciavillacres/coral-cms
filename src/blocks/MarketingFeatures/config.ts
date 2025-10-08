import type { Block } from 'payload'

export const MarketingFeatures: Block = {
  slug: 'marketingFeatures',
  labels: {
    singular: 'Marketing Features',
    plural: 'Marketing Features',
  },
  interfaceName: 'MarketingFeaturesBlock',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Layout Variant',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'List',
          value: 'list',
        },
        {
          label: 'Cards',
          value: 'cards',
        },
      ],
      defaultValue: 'grid',
      admin: {
        description: 'Choose how to display the features',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      admin: {
        description: 'Optional title for the features section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Section Subtitle',
      admin: {
        description: 'Optional subtitle for the features section',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Zap (Lightning)', value: 'zap' },
            { label: 'Shield (Security)', value: 'shield' },
            { label: 'Users (Team)', value: 'users' },
            { label: 'Globe (Global)', value: 'globe' },
            { label: 'Smartphone (Mobile)', value: 'smartphone' },
            { label: 'Clock (Time)', value: 'clock' },
            { label: 'Star (Quality)', value: 'star' },
            { label: 'Heart (Love)', value: 'heart' },
            { label: 'Target (Goals)', value: 'target' },
            { label: 'Rocket (Launch)', value: 'rocket' },
            { label: 'Lock (Secure)', value: 'lock' },
            { label: 'Trending Up (Growth)', value: 'trending-up' },
          ],
          defaultValue: 'zap',
          admin: {
            description: 'Choose an icon to represent this feature',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          label: 'Optional Link',
          admin: {
            description: 'Add a link to learn more about this feature',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Link Text',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
            },
          ],
        },
      ],
    },
  ],
}
