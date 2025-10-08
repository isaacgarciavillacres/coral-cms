'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/utilities/ui'
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react'

interface FooterLink {
  title: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram'
  href: string
}

interface FooterProps {
  logo?: React.ReactNode
  description?: string
  sections?: FooterSection[]
  socialLinks?: SocialLink[]
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
  showNewsletter?: boolean
  newsletterTitle?: string
  newsletterDescription?: string
  bottomText?: string
  className?: string
}

const socialIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
}

export function Footer({
  logo,
  description = 'Building amazing digital experiences for modern businesses.',
  sections = [],
  socialLinks = [],
  contactInfo,
  showNewsletter = true,
  newsletterTitle = 'Stay Updated',
  newsletterDescription = 'Get the latest news and updates delivered to your inbox.',
  bottomText,
  className,
}: FooterProps) {
  const [email, setEmail] = React.useState('')
  const [isSubscribing, setIsSubscribing] = React.useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      // Add your newsletter subscription logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      setEmail('')
      // Show success message
    } catch (error) {
      // Show error message
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className={cn('border-t bg-background', className)}>
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            {logo && (
              <Link href="/" className="flex items-center space-x-2">
                {logo}
              </Link>
            )}

            {description && <p className="text-sm text-muted-foreground max-w-xs">{description}</p>}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform]
                  return (
                    <Link
                      key={social.platform}
                      href={social.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.platform}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Navigation Sections */}
          {sections.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-sm font-semibold">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter & Contact */}
          <div className="space-y-8 lg:col-span-1">
            {/* Newsletter */}
            {showNewsletter && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">{newsletterTitle}</h3>
                <p className="text-sm text-muted-foreground">{newsletterDescription}</p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubscribing}
                  />
                  <Button type="submit" size="sm" className="w-full" disabled={isSubscribing}>
                    {isSubscribing ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 h-3 w-3" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}

            {/* Contact Info */}
            {contactInfo && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Contact</h3>
                <div className="space-y-3">
                  {contactInfo.email && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{contactInfo.email}</span>
                    </div>
                  )}
                  {contactInfo.phone && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{contactInfo.phone}</span>
                    </div>
                  )}
                  {contactInfo.address && (
                    <div className="flex items-start space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{contactInfo.address}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {bottomText || `© ${new Date().getFullYear()} CoralRock. All rights reserved.`}
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Usage Notes:
//
// Complete Footer:
// <Footer
//   logo={<span className="font-bold text-xl">CoralRock</span>}
//   description="Building amazing digital experiences for modern businesses."
//   sections={[
//     {
//       title: "Product",
//       links: [
//         { title: "Features", href: "/features" },
//         { title: "Pricing", href: "/pricing" },
//         { title: "Integrations", href: "/integrations" }
//       ]
//     },
//     {
//       title: "Company",
//       links: [
//         { title: "About", href: "/about" },
//         { title: "Blog", href: "/blog" },
//         { title: "Careers", href: "/careers" }
//       ]
//     },
//     {
//       title: "Support",
//       links: [
//         { title: "Help Center", href: "/help" },
//         { title: "Contact", href: "/contact" },
//         { title: "Documentation", href: "/docs" }
//       ]
//     }
//   ]}
//   socialLinks={[
//     { platform: "twitter", href: "https://twitter.com/coralrock" },
//     { platform: "github", href: "https://github.com/coralrock" },
//     { platform: "linkedin", href: "https://linkedin.com/company/coralrock" }
//   ]}
//   contactInfo={{
//     email: "hello@coralrock.com",
//     phone: "+1 (555) 123-4567",
//     address: "123 Business St, City, State 12345"
//   }}
//   bottomText="© 2024 CoralRock CMS. Built with ❤️ by the team."
// />
//
// Simple Footer:
// <Footer
//   logo={<span className="font-bold">Brand</span>}
//   showNewsletter={false}
//   sections={[
//     {
//       title: "Links",
//       links: [
//         { title: "Home", href: "/" },
//         { title: "About", href: "/about" }
//       ]
//     }
//   ]}
// />
