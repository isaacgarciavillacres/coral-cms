'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

interface Feature {
  icon?: React.ReactNode
  title: string
  description: string
  badge?: string
}

interface FeatureSectionProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  features: Feature[]
  layout?: 'grid' | 'list'
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureSection({
  badge,
  title,
  subtitle,
  description,
  features,
  layout = 'grid',
  columns = 3,
  className,
}: FeatureSectionProps) {
  return (
    <section className={cn('py-24 md:py-32', className)}>
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {badge && <Badge variant="secondary">{badge}</Badge>}

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
            {subtitle && <h3 className="text-xl text-muted-foreground sm:text-2xl">{subtitle}</h3>}
          </div>

          {description && (
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 max-w-6xl">
          {layout === 'grid' ? (
            <div
              className={cn(
                'grid gap-6 lg:gap-8',
                columns === 2 && 'md:grid-cols-2',
                columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
                columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
              )}
            >
              {features.map((feature, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    {feature.icon && (
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      {feature.badge && (
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  {feature.icon && (
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      {feature.icon}
                    </div>
                  )}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      {feature.badge && (
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Usage Notes:
//
// Grid Layout with Icons:
// <FeatureSection
//   badge="Features"
//   title="Everything You Need"
//   description="Powerful features to help you build amazing products"
//   features={[
//     {
//       icon: <Zap className="h-6 w-6" />,
//       title: "Lightning Fast",
//       description: "Optimized for speed and performance"
//     },
//     {
//       icon: <Shield className="h-6 w-6" />,
//       title: "Secure by Default",
//       description: "Built with security best practices"
//     }
//   ]}
//   columns={3}
// />
//
// List Layout:
// <FeatureSection
//   title="Why Choose Us"
//   layout="list"
//   features={[
//     {
//       title: "Expert Team",
//       description: "Our experienced professionals deliver exceptional results",
//       badge: "Premium"
//     }
//   ]}
// />
