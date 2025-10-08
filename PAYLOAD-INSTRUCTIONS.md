# Payload CMS Development Instructions for CoralRock Template

## Overview

This document provides comprehensive instructions for developers working with the CoralRock Payload CMS template. This is a company template designed for creating client websites where developers build the technical infrastructure and clients manage content through the Payload admin panel.

## Core Philosophy

**Developer Role**: Build the technical assets, components, and structure
**Client Role**: Manage content, text, images, and basic layout through the CMS
**Goal**: Create websites where clients can independently update content without developer intervention

## Project Architecture

### Core Structure

```text
src/
├── payload.config.ts          # Main Payload configuration
├── collections/               # Content types (Pages, Posts, Media, etc.)
├── blocks/                   # Reusable content blocks
├── heros/                    # Hero section variations
├── components/               # React components
├── globals/                  # Site-wide settings (Header, Footer)
└── access/                   # Permission controls
```

## Development Best Practices

### 1. Collection Development

**Always follow this pattern when creating collections:**

```typescript
// collections/YourCollection.ts
import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'

export const YourCollection: CollectionConfig = {
  slug: 'your-collection',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Add other fields following Payload field patterns
  ],
}
```

**Key Rules:**

- Always include proper access controls
- Use semantic field names
- Include admin configuration for better UX
- Follow existing naming conventions
- Add proper TypeScript types

### 2. Block Development

**Create reusable content blocks for flexible layouts:**

```typescript
// blocks/YourBlock/config.ts
import type { Block } from 'payload'

export const YourBlock: Block = {
  slug: 'yourBlock',
  labels: {
    singular: 'Your Block',
    plural: 'Your Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Other fields
  ],
}
```

**Block Guidelines:**

- Create corresponding React components in the same directory
- Use descriptive slugs and labels
- Think about content editor experience
- Make blocks reusable across different page types
- Include preview/admin representations

### 3. Field Development

**Use standardized field patterns:**

```typescript
// Common field patterns
const titleField = {
  name: 'title',
  type: 'text',
  required: true,
}

const slugField = {
  name: 'slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug('title')],
  },
}

const publishedField = {
  name: 'publishedAt',
  type: 'date',
  admin: {
    position: 'sidebar',
  },
}
```

### 4. Access Control Patterns

**Use these standard access patterns:**

- `authenticated`: Requires login (for admin-only content)
- `authenticatedOrPublished`: Public if published, admin-only if draft
- `anyone`: Public access (use sparingly)

### 5. Rich Text Configuration

**Use consistent rich text setup:**

```typescript
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const richTextField = {
  name: 'content',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  }),
}
```

## Content Management Guidelines

### For Content Editors (Clients)

**Page Management:**

1. Navigate to Collections → Pages
2. Create new pages or edit existing ones
3. Use the block system to build page layouts
4. Preview changes before publishing
5. Publish when ready

**Block Usage:**

- **Hero Blocks**: Use for page headers with different impact levels
- **Content Blocks**: For text content with optional columns
- **Media Blocks**: For images, videos, and galleries
- **Call-to-Action Blocks**: For buttons and conversion elements
- **Archive Blocks**: For listing posts or other content

**Media Management:**

1. Upload through Collections → Media
2. Add alt text for accessibility
3. Use appropriate file formats (WebP preferred for images)
4. Organize with descriptive filenames

### For Developers

**When Adding New Features:**

1. **Plan the Content Structure**
   - What fields does the client need to edit?
   - How should content be organized?
   - What access controls are needed?

2. **Create Backend Structure**
   - Add collections for new content types
   - Create blocks for reusable components
   - Set up proper field configurations

3. **Build Frontend Components**
   - Create React components to render the content
   - Use TypeScript with Payload-generated types
   - Implement responsive designs
   - Handle loading and error states

4. **Test Content Management**
   - Ensure clients can easily add/edit content
   - Verify preview functionality works
   - Test all field types and validations
   - Confirm proper access controls

## Common Patterns

### Page Building Pattern

```typescript
// In page collection
{
  name: 'layout',
  type: 'blocks',
  blocks: [
    HeroBlock,
    ContentBlock,
    MediaBlock,
    CallToActionBlock,
    // Add more blocks as needed
  ],
}
```

### Relationship Pattern

```typescript
{
  name: 'relatedPosts',
  type: 'relationship',
  relationTo: 'posts',
  hasMany: true,
  admin: {
    sortOptions: '-publishedAt',
  },
}
```

### SEO Pattern

```typescript
// Use Payload SEO plugin fields
{
  name: 'meta',
  type: 'group',
  fields: [
    MetaTitleField(),
    MetaDescriptionField(),
    MetaImageField(),
  ],
}
```

## File Organization Rules

### Collections (`src/collections/`)

- One file per collection
- Use PascalCase for filenames
- Group related files in subdirectories if complex

### Blocks (`src/blocks/`)

- Each block gets its own directory
- Include `config.ts` for Payload configuration
- Include `Component.tsx` for React rendering
- Add `index.ts` for clean exports

### Components (`src/components/`)

- Organize by feature or purpose
- Use PascalCase for component names
- Include proper TypeScript interfaces
- Follow React best practices

### Utilities (`src/utilities/`)

- Pure functions for data manipulation
- Helper functions for common operations
- Keep focused and single-purpose

## Development Workflow

### 1. Setup Phase

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Generate Payload types
pnpm dev
```

### 2. Development Phase

```bash
# Start development server
pnpm dev

# Access admin panel at /admin
# Frontend at root URL
```

### 3. Content Structure Phase

1. Plan content types and relationships
2. Create collections and blocks
3. Set up proper access controls
4. Configure admin interface

### 4. Frontend Implementation

1. Create React components
2. Implement responsive designs
3. Add proper loading states
4. Test with real content

### 5. Client Handoff

1. Create content guide for client
2. Set up user accounts
3. Provide training materials
4. Document any custom features

## Environment Variables

**Required Variables:**

```env
PAYLOAD_SECRET=your-secret-key
DATABASE_URL=your-database-url
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Optional Variables:**

```env
REVALIDATION_KEY=revalidation-secret
S3_BUCKET=your-s3-bucket
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
```

## Common Issues and Solutions

### TypeScript Errors

- Run `pnpm payload generate:types` after collection changes
- Restart TypeScript service in VS Code
- Check import paths are correct

### Content Not Showing

- Verify access controls are correct
- Check if content is published
- Ensure proper population in queries

### Admin Panel Issues

- Clear browser cache
- Check console for JavaScript errors
- Verify all required fields are completed

### Performance Issues

- Optimize images before upload
- Use proper field selection in queries
- Implement pagination for large datasets

## Security Best Practices

1. **Access Controls**: Always implement proper access controls
2. **Environment Variables**: Never commit secrets to version control
3. **User Permissions**: Use least privilege principle
4. **Input Validation**: Payload handles this, but be aware of custom fields
5. **File Uploads**: Restrict file types and sizes appropriately

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Static assets optimized
- [ ] SEO fields completed
- [ ] Analytics tracking implemented
- [ ] Error monitoring configured
- [ ] Backup strategy in place
- [ ] Content editor accounts created
- [ ] Training materials provided

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Getting Help

1. Check Payload CMS documentation first
2. Search existing issues in the repository
3. Ask team members familiar with the template
4. Create detailed bug reports with reproduction steps

---

**Remember**: The goal is to create websites where clients can manage their content independently. Always think from the content editor's perspective when building new features.
