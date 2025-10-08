import type { Block } from 'payload'

export const MarketingHero: Block = {
  slug: 'marketingHero',
  labels: {
    singular: 'Marketing Hero',
    plural: 'Marketing Heroes',
  },
  interfaceName: 'MarketingHeroBlock',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Hero Variant',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Gradient',
          value: 'gradient',
        },
        {
          label: 'Highlight',
          value: 'highlight',
        },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Choose the visual style for the hero section',
      },
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      admin: {
        description: 'Optional badge/announcement text shown above the title',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Main headline for the hero section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      admin: {
        description: 'Optional subtitle text',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        description: 'Supporting description text',
      },
    },
    {
      name: 'primaryAction',
      type: 'group',
      label: 'Primary Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Button URL',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
          ],
          defaultValue: 'default',
        },
        {
          name: 'showIcon',
          type: 'checkbox',
          label: 'Show Arrow Icon',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'secondaryAction',
      type: 'group',
      label: 'Secondary Action Button',
      admin: {
        description: 'Optional secondary button (typically for demos or videos)',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Button URL',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
          ],
          defaultValue: 'outline',
        },
        {
          name: 'showPlayIcon',
          type: 'checkbox',
          label: 'Show Play Icon',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image for the hero section',
      },
    },
  ],
}
