# Marketing Components with Payload CMS Integration

This document provides instructions on how to use the marketing components in your CoralRock CMS template, which integrates Shadcn/ui components with Acernity effects and Payload CMS content management.

## Available Marketing Blocks

### 1. Marketing Hero Block

**Purpose**: Create stunning hero sections with optional Acernity effects
**Block Type**: `marketingHero`

**Features**:

- Three visual variants: Default, Gradient, Highlight (uses Acernity HeroHighlight)
- Primary and secondary action buttons
- Optional badge/announcement text
- Background image support
- Icon support for buttons

**Content Fields**:

- **Variant**: Choose visual style (Default/Gradient/Highlight)
- **Badge**: Optional announcement text above title
- **Title**: Main headline (required)
- **Subtitle**: Optional subtitle text
- **Description**: Supporting description (required)
- **Primary Action**: Main CTA button (text, URL, style, icon option)
- **Secondary Action**: Optional second button (often for demos/videos)
- **Background Image**: Optional background image

**Usage in Admin**:

1. Go to Pages → Edit a page
2. In the Content tab, add a block
3. Choose "Marketing Hero"
4. Fill in the fields according to your needs

### 2. Marketing Features Block

**Purpose**: Showcase product/service features in grid or list layouts
**Block Type**: `marketingFeatures`

**Features**:

- Multiple layout options: Grid, List, Cards
- Icon selection from predefined set
- Optional links for each feature
- Responsive design

**Content Fields**:

- **Layout Variant**: Grid/List/Cards display
- **Title**: Optional section title
- **Subtitle**: Optional section subtitle
- **Features Array**: Add multiple features with:
  - Icon selection (Lightning, Shield, Users, Globe, etc.)
  - Feature title and description
  - Optional "Learn More" link

**Available Icons**:

- Zap (Lightning), Shield (Security), Users (Team)
- Globe (Global), Smartphone (Mobile), Clock (Time)
- Star (Quality), Heart (Love), Target (Goals)
- Rocket (Launch), Lock (Secure), Trending Up (Growth)

### 3. Marketing CTA Block

**Purpose**: Create compelling call-to-action sections
**Block Type**: `marketingCTA`

**Features**:

- Multiple visual styles: Default, Gradient, Card, Bordered
- Primary and secondary actions
- Background image support
- Professional construction industry styling

**Content Fields**:

- **Variant**: Visual style selection
- **Title**: Main CTA headline (required)
- **Subtitle**: Optional subtitle
- **Description**: Supporting text
- **Primary Action**: Main CTA button configuration
- **Secondary Action**: Optional secondary button
- **Background Image**: Optional background image

### 4. Marketing Contact Form Block

**Purpose**: Flexible contact forms with customizable fields
**Block Type**: `marketingContactForm`

**Features**:

- Configurable form fields (name, email, company, phone, subject, message)
- Required field configuration
- Multiple layout options
- Custom success messages
- Form submission endpoint configuration

**Content Fields**:

- **Title/Subtitle/Description**: Optional form introduction
- **Form Configuration**:
  - Submit URL (default: `/api/contact`)
  - Show/hide fields (name, company, phone, subject)
  - Required fields selection
- **Submit Button**: Text, loading text, style
- **Success Message**: Custom thank you message
- **Layout**: Full width, Two column, or Card layout

## Using Components in Code

If you need to use these components directly in React code (not through CMS):

```tsx
import { HeroSection } from '@/components/marketing/HeroSection'
import { FeatureSection } from '@/components/marketing/FeatureSection'
import { CTASection } from '@/components/marketing/CTASection'
import { ContactForm } from '@/components/marketing/ContactForm'

// Example Hero usage
;<HeroSection
  variant="highlight"
  title="Build Better Websites"
  description="Create stunning websites with our construction-focused CMS"
  primaryAction={{
    text: 'Get Started',
    href: '/contact',
    variant: 'default',
  }}
  secondaryAction={{
    text: 'Watch Demo',
    href: '/demo',
    variant: 'outline',
  }}
/>
```

## Styling & Theming

### Construction Industry Branding

- **Light Mode**: Uses red primary color (`#ef4444`) for construction branding
- **Dark Mode**: Uses generic black tones with white accents
- All components respect the theme toggle functionality

### Customization

- Components use Tailwind CSS for styling
- Shadcn/ui provides the base component library
- Acernity effects are integrated for enhanced visual appeal
- Responsive design is built-in for all screen sizes

## Content Management Best Practices

### For Content Editors

1. **Hero Sections**: Keep titles concise but impactful. Use the badge for announcements or special offers.
2. **Features**: Limit to 3-6 key features for best visual impact. Choose icons that clearly represent each feature.
3. **CTAs**: Use action-oriented language. Test different variants to see what works best for your audience.
4. **Contact Forms**: Only show fields you actually need. Too many fields can reduce conversion rates.

### For Developers

1. **Type Safety**: All components use generated Payload types for full type safety
2. **Error Handling**: Components gracefully handle missing or null data
3. **Performance**: Components are optimized for server-side rendering
4. **Accessibility**: All components include proper ARIA labels and keyboard navigation

## API Integration

### Contact Form Submission

Create an API endpoint at `/api/contact` to handle form submissions:

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Process form data
    // Send email, save to database, etc.

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

## Next Steps

1. **Test the Components**: Create a test page and try each block type
2. **Customize Styling**: Adjust colors and spacing to match your brand
3. **Add Analytics**: Track form submissions and CTA clicks
4. **Optimize Performance**: Use Next.js Image optimization for background images
5. **A/B Testing**: Test different variants and messaging for better conversion

## Support

For issues or questions:

- Check the component source code in `/src/components/marketing/`
- Review block configurations in `/src/blocks/Marketing*/`
- Refer to Payload CMS documentation for content management
- Check Shadcn/ui and Acernity documentation for styling options
