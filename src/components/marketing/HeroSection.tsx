'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { cn } from '@/utilities/ui'
import { ArrowRight, Play } from 'lucide-react'

interface HeroAction {
  text: string
  href: string
  variant?: 'default' | 'secondary' | 'outline'
  icon?: React.ReactNode
}

interface HeroSectionProps {
  badge?: string
  title: string
  subtitle?: string
  description: string
  primaryAction: HeroAction
  secondaryAction?: HeroAction
  backgroundImage?: string
  className?: string
  variant?: 'default' | 'gradient' | 'highlight'
}

export function HeroSection({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className,
  variant = 'default',
}: HeroSectionProps) {
  const content = (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        {badge && (
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
        )}

        <div className="space-y-2">
          {variant === 'highlight' ? (
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <Highlight className="text-black dark:text-white">{title}</Highlight>
            </h1>
          ) : (
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
          )}

          {subtitle && (
            <h2 className="text-xl text-muted-foreground sm:text-2xl md:text-3xl">{subtitle}</h2>
          )}
        </div>

        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button size="lg" asChild>
            <Link href={primaryAction.href}>
              {primaryAction.text}
              {primaryAction.icon || <ArrowRight className="ml-2 h-4 w-4" />}
            </Link>
          </Button>

          {secondaryAction && (
            <Button variant={secondaryAction.variant || 'outline'} size="lg" asChild>
              <Link href={secondaryAction.href}>
                {secondaryAction.icon || <Play className="mr-2 h-4 w-4" />}
                {secondaryAction.text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  if (variant === 'highlight') {
    return <HeroHighlight className={cn('py-24 md:py-32', className)}>{content}</HeroHighlight>
  }

  return (
    <section
      className={cn(
        'py-24 md:py-32',
        variant === 'gradient' && 'bg-gradient-to-br from-background to-muted',
        className,
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {content}
    </section>
  )
}

// Usage Notes:
//
// Basic Hero:
// <HeroSection
//   badge="New Release"
//   title="Build Amazing Websites"
//   subtitle="Fast, Modern, and Scalable"
//   description="Create stunning web experiences with our cutting-edge platform."
//   primaryAction={{ text: "Get Started", href: "/signup" }}
//   secondaryAction={{ text: "Watch Demo", href: "/demo" }}
// />
//
// Hero with Highlight Effect:
// <HeroSection
//   variant="highlight"
//   title="Revolutionize Your Business"
//   description="Transform your digital presence with our innovative solutions."
//   primaryAction={{ text: "Start Free Trial", href: "/trial" }}
// />
//
// Hero with Gradient Background:
// <HeroSection
//   variant="gradient"
//   title="Welcome to the Future"
//   description="Experience the next generation of technology."
//   primaryAction={{ text: "Explore", href: "/explore" }}
// />
