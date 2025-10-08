import type { Block } from 'payload'

export const MarketingContactForm: Block = {
  slug: 'marketingContactForm',
  dbName: 'mkt_contact_form', // Shortened to avoid 63 char PostgreSQL limit
  labels: {
    singular: 'Marketing Contact Form',
    plural: 'Marketing Contact Forms',
  },
  interfaceName: 'MarketingContactFormBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      admin: {
        description: 'Optional title for the contact form section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Form Subtitle',
      admin: {
        description: 'Optional subtitle for the contact form section',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Form Description',
      admin: {
        description: 'Optional description text above the form',
      },
    },
    {
      name: 'formCfg',
      type: 'group',
      label: 'Form Configuration',
      fields: [
        {
          name: 'submitUrl',
          type: 'text',
          label: 'Submit URL',
          admin: {
            description: 'URL where form submissions should be sent (e.g., /api/contact)',
          },
          defaultValue: '/api/contact',
        },
        {
          name: 'showNameField',
          type: 'checkbox',
          label: 'Show Name Field',
          defaultValue: true,
        },
        {
          name: 'showCompanyField',
          type: 'checkbox',
          label: 'Show Company Field',
          defaultValue: true,
        },
        {
          name: 'showPhoneField',
          type: 'checkbox',
          label: 'Show Phone Field',
          defaultValue: true,
        },
        {
          name: 'showSubjectField',
          type: 'checkbox',
          label: 'Show Subject Field',
          defaultValue: false,
        },
        {
          name: 'reqFields',
          type: 'select',
          label: 'Required Fields',
          hasMany: true,
          options: [
            { label: 'Name', value: 'name' },
            { label: 'Email', value: 'email' },
            { label: 'Company', value: 'company' },
            { label: 'Phone', value: 'phone' },
            { label: 'Subject', value: 'subject' },
            { label: 'Message', value: 'message' },
          ],
          defaultValue: ['name', 'email', 'message'],
          admin: {
            description: 'Select which fields should be required',
          },
        },
      ],
    },
    {
      name: 'submitButton',
      type: 'group',
      label: 'Submit Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Send Message',
        },
        {
          name: 'loadingText',
          type: 'text',
          label: 'Loading Text',
          defaultValue: 'Sending...',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          dbName: 'style', // Shortened to avoid 63 char PostgreSQL limit
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
      name: 'successMessage',
      type: 'textarea',
      label: 'Success Message',
      defaultValue: "Thank you for your message! We'll get back to you soon.",
      admin: {
        description: 'Message to show after successful form submission',
      },
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Form Layout',
      options: [
        {
          label: 'Full Width',
          value: 'full',
        },
        {
          label: 'Two Column',
          value: 'two-column',
        },
        {
          label: 'Card',
          value: 'card',
        },
      ],
      defaultValue: 'card',
      admin: {
        description: 'Choose how to display the contact form',
      },
    },
  ],
}
