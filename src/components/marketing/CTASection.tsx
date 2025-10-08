'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CTAAction {
  text: string
  href: string
  variant?: 'default' | 'secondary' | 'outline'
  icon?: React.ReactNode
}

interface CTASectionProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  primaryAction: CTAAction
  secondaryAction?: CTAAction
  variant?: 'default' | 'card' | 'gradient' | 'bordered'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CTASection({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  size = 'md',
  className,
}: CTASectionProps) {
  const sizeClasses = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-24',
    lg: 'py-24 md:py-32',
  }

  const content = (
    <div className="flex flex-col items-center space-y-4 text-center">
      {badge && (
        <Badge variant="secondary" className="mb-2">
          <Sparkles className="mr-1 h-3 w-3" />
          {badge}
        </Badge>
      )}

      <div className="space-y-2">
        <h2
          className={cn(
            'font-bold tracking-tighter',
            size === 'sm' && 'text-2xl sm:text-3xl md:text-4xl',
            size === 'md' && 'text-3xl sm:text-4xl md:text-5xl',
            size === 'lg' && 'text-4xl sm:text-5xl md:text-6xl',
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <h3
            className={cn(
              'text-muted-foreground',
              size === 'sm' && 'text-lg sm:text-xl',
              size === 'md' && 'text-xl sm:text-2xl',
              size === 'lg' && 'text-2xl sm:text-3xl',
            )}
          >
            {subtitle}
          </h3>
        )}
      </div>

      {description && (
        <p
          className={cn(
            'mx-auto text-muted-foreground',
            size === 'sm' && 'max-w-[600px] text-base',
            size === 'md' && 'max-w-[700px] md:text-lg',
            size === 'lg' && 'max-w-[800px] text-lg md:text-xl',
          )}
        >
          {description}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:gap-6">
        <Button size={size === 'sm' ? 'default' : 'lg'} asChild>
          <Link href={primaryAction.href}>
            {primaryAction.text}
            {primaryAction.icon || <ArrowRight className="ml-2 h-4 w-4" />}
          </Link>
        </Button>

        {secondaryAction && (
          <Button
            variant={secondaryAction.variant || 'outline'}
            size={size === 'sm' ? 'default' : 'lg'}
            asChild
          >
            <Link href={secondaryAction.href}>
              {secondaryAction.icon}
              {secondaryAction.text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  )

  const containerClasses = cn(sizeClasses[size], className)

  if (variant === 'card') {
    return (
      <section className={containerClasses}>
        <div className="container px-4 md:px-6">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-8 md:p-12">{content}</CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (variant === 'gradient') {
    return (
      <section
        className={cn(
          containerClasses,
          'bg-gradient-to-br from-primary/5 via-background to-secondary/5',
        )}
      >
        <div className="container px-4 md:px-6">{content}</div>
      </section>
    )
  }

  if (variant === 'bordered') {
    return (
      <section className={containerClasses}>
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-muted/20 p-8 md:p-12">
            {content}
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className={containerClasses}>
      <div className="container px-4 md:px-6">{content}</div>
    </section>
  )
}

// Usage Notes:
//
// Basic CTA:
// <CTASection
//   title="Ready to Get Started?"
//   description="Join thousands of satisfied customers who have transformed their business with our platform."
//   primaryAction={{ text: "Start Free Trial", href: "/signup" }}
//   secondaryAction={{ text: "Contact Sales", href: "/contact", variant: "outline" }}
// />
//
// Card Variant with Badge:
// <CTASection
//   variant="card"
//   badge="Limited Time"
//   title="Special Launch Offer"
//   subtitle="50% Off First Year"
//   description="Don't miss out on our exclusive launch pricing."
//   primaryAction={{ text: "Claim Offer", href: "/offer" }}
//   size="lg"
// />
//
// Gradient Background:
// <CTASection
//   variant="gradient"
//   title="Transform Your Business Today"
//   description="Experience the power of our platform with a free 30-day trial."
//   primaryAction={{ text: "Start Trial", href: "/trial" }}
//   size="sm"
// />
//
// Bordered Style:
// <CTASection
//   variant="bordered"
//   title="Need Help Getting Started?"
//   description="Our team of experts is ready to help you succeed."
//   primaryAction={{ text: "Book Consultation", href: "/consultation" }}
//   secondaryAction={{ text: "View Documentation", href: "/docs", variant: "secondary" }}
// />
