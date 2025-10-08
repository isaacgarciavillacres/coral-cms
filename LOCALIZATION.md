# Localization Setup for Coral Rock Construction

Currently, the project is set up for English only, but localization infrastructure is available through Payload CMS.

## Current Status

- **Primary Language**: English (en)
- **Localization**: Not configured (English only)
- **Translation Package**: @payloadcms/translations is available

## To Enable Localization Later

If you want to add French translation support in the future, you would need to:

1. **Add localization config to payload.config.ts**:

```typescript
export default buildConfig({
  // ... existing config
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'French',
        code: 'fr',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  // ... rest of config
})
```

2. **Update collections to support localized fields**:

```typescript
// In your collections, mark fields as localized
{
  name: 'title',
  type: 'text',
  localized: true, // This field will be translatable
  required: true,
}
```

3. **Frontend routing**: Update Next.js routing to handle locale-specific URLs like `/fr/about-us`

4. **Content structure**: All localized content would be stored in the same document with different locale versions.

## Benefits of Current English-Only Setup

- Simpler content management
- Faster development
- No translation overhead
- Easy to add localization later without data migration issues

## Future French Support Considerations

- PEI has both English and French speakers
- Construction industry terminology in French
- Local building codes and regulations in both languages
- Contact information and forms in both languages

The current setup allows you to focus on your core English content while keeping the door open for future French localization if your business expands to serve French-speaking clients on PEI.
