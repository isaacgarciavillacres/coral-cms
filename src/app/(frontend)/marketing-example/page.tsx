import type { Metadata } from 'next'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Page as PageType } from '@/payload-types'

// This is an example of how your marketing page data would look
// In a real scenario, this would come from Payload CMS
const examplePageData: Partial<PageType> = {
  title: 'Marketing Page Example',
  slug: 'marketing-example',
  layout: [
    {
      blockType: 'marketingHero',
      variant: 'highlight',
      title: 'Build Amazing Websites with CoralRock CMS',
      subtitle: 'Professional Construction Industry Template',
      description:
        'Create stunning, content-managed websites that your clients can update themselves. Built with Next.js, Payload CMS, and modern web technologies.',
      badge: 'New Template Available',
      primaryAction: {
        text: 'Get Started Today',
        href: '/contact',
        variant: 'default',
        showIcon: true,
      },
      secondaryAction: {
        text: 'Watch Demo',
        href: '/demo',
        variant: 'outline',
        showPlayIcon: true,
      },
    },
    {
      blockType: 'marketingFeatures',
      variant: 'grid',
      title: 'Why Choose CoralRock CMS?',
      subtitle: 'Everything you need for professional website development',
      features: [
        {
          icon: 'zap',
          title: 'Lightning Fast',
          description:
            'Built with Next.js 15+ and optimized for performance. Your websites will load instantly and rank higher in search engines.',
        },
        {
          icon: 'shield',
          title: 'Secure & Reliable',
          description:
            'Enterprise-grade security with role-based access controls. Your content and client data are always protected.',
        },
        {
          icon: 'users',
          title: 'Client-Friendly CMS',
          description:
            'Intuitive admin interface that allows clients to update content without technical knowledge. No more maintenance calls.',
        },
        {
          icon: 'smartphone',
          title: 'Mobile Responsive',
          description:
            "All components are built mobile-first and look perfect on any device. Your clients' customers will love the experience.",
        },
        {
          icon: 'rocket',
          title: 'Quick Deployment',
          description:
            'Deploy to Vercel, Netlify, or any hosting provider in minutes. Includes database setup and environment configuration.',
        },
        {
          icon: 'target',
          title: 'SEO Optimized',
          description:
            'Built-in SEO tools, meta tag management, and structured data. Help your clients rank higher in search results.',
        },
      ],
    },
    {
      blockType: 'marketingCTA',
      variant: 'gradient',
      title: 'Ready to Transform Your Web Development?',
      subtitle: 'Join thousands of developers building better websites',
      description:
        'Start creating professional, client-manageable websites today. No setup fees, no hidden costs.',
      primaryAction: {
        text: 'Start Free Trial',
        href: '/signup',
        variant: 'default',
      },
      secondaryAction: {
        text: 'Schedule Demo',
        href: '/demo',
        variant: 'outline',
      },
    },
    {
      blockType: 'marketingContactForm',
      title: 'Get In Touch',
      subtitle: 'Ready to get started? Contact our team',
      description:
        'Have questions about CoralRock CMS? Our team is here to help you build amazing websites.',
      layout: 'card',
      formConfig: {
        submitUrl: '/api/contact',
        showNameField: true,
        showCompanyField: true,
        showPhoneField: true,
        showSubjectField: false,
        requiredFields: ['name', 'email', 'message'],
      },
      submitButton: {
        text: 'Send Message',
        loadingText: 'Sending...',
        variant: 'default',
      },
      successMessage: "Thank you for reaching out! We'll get back to you within 24 hours.",
    },
  ],
  meta: {
    title: 'CoralRock CMS - Professional Website Template',
    description:
      'Build amazing, client-manageable websites with our construction industry CMS template. Built with Next.js, Payload CMS, and modern web technologies.',
  },
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
}

export default function MarketingExamplePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {examplePageData.layout && <RenderBlocks blocks={examplePageData.layout} />}
      </main>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: examplePageData.meta?.title || examplePageData.title,
    description: examplePageData.meta?.description,
  }
}
