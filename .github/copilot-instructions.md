# GitHub Copilot Custom Instructions for CoralRock CMS

## Global Instructions

You are working with a **CoralRock Payload CMS Template** - a company template for creating client websites using Payload CMS, Next.js, and TypeScript.

### Core Principles

- **Template Purpose**: Developers build technical infrastructure, clients manage content through CMS
- **Goal**: Create websites where clients can independently update content without developer intervention
- **Always refer to PAYLOAD-INSTRUCTIONS.md** for comprehensive Payload CMS patterns and best practices

### Technology Stack

- **CMS**: Payload CMS 3.x
- **Frontend**: Next.js 15+ (App Router)
- **Database**: PostgreSQL (Vercel Postgres)
- **Styling**: TailwindCSS + shadcn/ui
- **TypeScript**: Full type safety with Payload generated types

## Instructions by File Type

```yaml
applyTo:
  - 'src/collections/**/*.ts'
instructions: |
  When working with Payload collections:
  - Follow the collection patterns in PAYLOAD-INSTRUCTIONS.md
  - Always implement proper access controls using src/access/ patterns
  - Use TypeScript interfaces for type safety
  - Include proper field validation and admin UI configuration
  - Add defaultPopulate for referenced fields
  - Use consistent field naming conventions
  - Include SEO meta fields where appropriate
  - Implement proper hooks (populatePublishedAt, revalidation)
```

```yaml
applyTo:
  - 'src/blocks/**/*.ts'
  - 'src/blocks/**/*.tsx'
instructions: |
  When creating Payload blocks:
  - Create both config.ts (Payload configuration) and Component.tsx (React component)
  - Use descriptive slugs and labels for content editors
  - Think about content editor experience and ease of use
  - Make blocks reusable across different page types
  - Include proper TypeScript interfaces
  - Add validation and required field indicators
  - Consider responsive design for all screen sizes
  - Follow existing block patterns in the codebase
```

```yaml
applyTo:
  - 'src/components/**/*.tsx'
instructions: |
  When building React components:
  - Use Server Components by default, mark Client Components with 'use client'
  - Implement proper TypeScript interfaces for props
  - Use Payload-generated types for CMS data
  - Handle loading states and error conditions
  - Use shadcn/ui components for consistent UI
  - Follow construction industry branding (red primary in light mode)
  - Ensure accessibility with proper ARIA labels and alt text
  - Implement responsive designs using Tailwind CSS
```

```yaml
applyTo:
  - 'src/app/(frontend)/**/*.tsx'
instructions: |
  When working with frontend pages:
  - Use Server Components for data fetching
  - Fetch data using Payload's local API
  - Implement proper error boundaries and loading states
  - Use proper meta data generation for SEO
  - Follow Next.js App Router conventions
  - Cache data appropriately for performance
  - Handle draft preview and live preview functionality
  - Generate proper Open Graph tags
```

```yaml
applyTo:
  - 'src/fields/**/*.ts'
instructions: |
  When creating custom fields:
  - Follow existing field patterns (link.ts, linkGroup.ts, defaultLexical.ts)
  - Use consistent validation patterns
  - Include proper TypeScript interfaces
  - Add helpful admin UI configurations
  - Consider field reusability across collections
  - Include proper error handling and validation messages
```

```yaml
applyTo:
  - 'src/utilities/**/*.ts'
instructions: |
  When creating utility functions:
  - Keep functions pure and focused on single responsibilities
  - Use proper TypeScript types and interfaces
  - Include proper error handling
  - Consider server-side vs client-side usage
  - Add comprehensive JSDoc comments
  - Follow existing utility patterns in the codebase
```

```yaml
applyTo:
  - 'src/payload.config.ts'
instructions: |
  When modifying Payload configuration:
  - Always refer to PAYLOAD-INSTRUCTIONS.md for configuration patterns
  - Maintain consistent admin panel settings
  - Include proper CORS and database configuration
  - Set up proper authentication and access controls
  - Configure live preview and draft functionality
  - Include proper plugin configurations
  - Maintain TypeScript output configuration
```

```yaml
applyTo:
  - '**/*.md'
instructions: |
  When writing documentation:
  - Follow markdown best practices for formatting
  - Include proper headings and structure
  - Add code examples where helpful
  - Consider both developer and content creator audiences
  - Keep instructions clear and actionable
  - Include proper links and references
```

## Content Management Guidelines

```yaml
applyTo:
  - 'src/collections/**'
  - 'src/blocks/**'
  - 'src/globals/**'
instructions: |
  Always design CMS features with content editors in mind:
  - Use clear, descriptive field labels and help text
  - Organize fields logically with proper grouping
  - Include validation with helpful error messages
  - Provide sensible defaults where possible
  - Use conditional logic to show/hide relevant fields
  - Create intuitive admin interfaces
  - Test usability with non-technical users
  - Document any custom functionality for content creators
```

## Development Workflow

```yaml
applyTo:
  - '**/*.ts'
  - '**/*.tsx'
instructions: |
  Follow this development workflow:
  1. Always consult PAYLOAD-INSTRUCTIONS.md for CMS-related work
  2. Plan content structure before building technical implementation
  3. Create backend CMS structure first (collections, blocks, fields)
  4. Build frontend components that render CMS content
  5. Test with real content and various content scenarios
  6. Generate types with `pnpm generate:types` after schema changes
  7. Verify admin interface usability for content editors
  8. Document any custom features or usage patterns
```

## Construction Industry Branding

```yaml
applyTo:
  - '**/*.tsx'
  - '**/*.css'
instructions: |
  Maintain construction industry branding:
  - Light mode: Use red primary color (#ef4444) for construction branding
  - Dark mode: Use generic black tones with white accents
  - Professional, trustworthy aesthetic
  - Clear call-to-action buttons and contact information
  - Use construction-themed color palette variables
  - Ensure high contrast for accessibility
  - Professional typography choices
```

## Testing and Quality

```yaml
applyTo:
  - '**/*.ts'
  - '**/*.tsx'
instructions: |
  Ensure quality and testing:
  - Write TypeScript with strict mode enabled
  - Use Payload-generated types for CMS data
  - Include proper error handling and validation
  - Test admin interface workflows
  - Verify responsive designs across devices
  - Check accessibility compliance
  - Test content publishing and draft workflows
  - Validate SEO meta data generation
```

## Template Maintenance

```yaml
applyTo:
  - '**/*'
instructions: |
  This is a company template, so:
  - Keep code patterns consistent for easy onboarding
  - Document any deviations from standard patterns
  - Consider maintainability for future developers
  - Update PAYLOAD-INSTRUCTIONS.md with any new patterns
  - Ensure changes work across different project types
  - Test template usability with new team members
  - Keep dependencies up to date and secure
```
