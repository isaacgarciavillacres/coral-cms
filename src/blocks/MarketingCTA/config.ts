import type { Block } from 'payload'

export const MarketingCTA: Block = {
  slug: 'marketingCTA',
  labels: {
    singular: 'Marketing CTA',
    plural: 'Marketing CTAs',
  },
  interfaceName: 'MarketingCTABlock',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'CTA Variant',
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
          label: 'Card',
          value: 'card',
        },
        {
          label: 'Bordered',
          value: 'bordered',
        },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Choose the visual style for the CTA section',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Main headline for the CTA section',
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
      ],
    },
    {
      name: 'secondaryAction',
      type: 'group',
      label: 'Secondary Action Button',
      admin: {
        description: 'Optional secondary button',
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
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image for the CTA section',
      },
    },
  ],
}
