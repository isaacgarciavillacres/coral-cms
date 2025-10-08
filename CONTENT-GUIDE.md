# Coral Rock Construction Content Management Guide

## Overview

This guide explains how to manage content for your Coral Rock Construction website using Payload CMS.

## Content Structure

### Homepage Content

The homepage is organized into blocks using Payload's flexible block system:

1. **Hero Section** (`highImpact` hero type)
   - Main headline: "Welcome to Coral Rock Construction"
   - Subheading: "PEI's Trusted Partner for Quality Framing & Construction Services"
   - Description paragraph about your reputation and expertise

2. **Framing Specialty Block** (`content` block)
   - Highlights framing as your core specialty
   - Emphasizes experience and expertise across PEI

3. **Services List Block** (`content` block)
   - Comprehensive list of services offered
   - Each service includes brief description
   - Note about partnering with electricians and plumbers

4. **Call-to-Action Block** (`cta` block)
   - "Ready to Build Together?" heading
   - Contact invitation with button link

## Available Block Types

Your Payload CMS is configured with these block types:

- `content` - Text content with rich text editor and column layouts
- `cta` - Call-to-action sections with buttons and links
- `mediaBlock` - Image and media content
- `archive` - Lists of posts or pages
- `formBlock` - Contact and inquiry forms

## How to Edit Content

### Through the Admin Dashboard

1. Visit `/admin` on your website
2. Log in with your admin credentials
3. Navigate to "Pages" → "Home"
4. Edit the blocks as needed
5. Publish changes

### Content Guidelines

**Brand Voice**: Professional, reliable, local
**Key Messages**:

- PEI-based expertise and local knowledge
- Framing specialty with comprehensive services
- Reliability and quality craftsmanship
- Island values and community investment

**SEO Considerations**:

- Focus on "PEI construction", "framing services", "Prince Edward Island"
- Include location-specific terms
- Emphasize specialty services

## File Locations

- **Static Content**: `/src/endpoints/seed/coral-rock-static.ts`
- **JSON Structure**: `/coral-rock-content.json`
- **Page Template**: `/src/app/(frontend)/[slug]/page.tsx`

## Content Types

### Rich Text Fields

Rich text content supports:

- Headings (H1, H2, H3)
- Paragraphs
- Bold and italic text
- Lists (bulleted and numbered)
- Links

### Meta Data

Each page includes SEO metadata:

- Page title
- Meta description
- Keywords (for search optimization)

## Future Expansion

The content structure is designed to be expandable:

1. **Additional Pages**: Services, About, Contact, Projects
2. **Blog/News**: Construction tips, project showcases, company updates
3. **Project Gallery**: Portfolio of completed work
4. **Team Profiles**: Meet the crew pages
5. **Testimonials**: Customer success stories

## Localization Ready

While currently English-only, the system supports future French localization for PEI's bilingual market.

## Content Maintenance

**Regular Updates**:

- Service offerings and capabilities
- Contact information
- Testimonials and reviews
- Project portfolios
- Seasonal messaging (winter prep, spring construction season)

**SEO Monitoring**:

- Track performance of key terms
- Update meta descriptions based on search performance
- Add location-specific landing pages as business grows

This structure provides a solid foundation for your marketing website while maintaining flexibility for future growth and content expansion.
