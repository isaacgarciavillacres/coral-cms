import React from 'react'
import type { MarketingFeaturesBlock as MarketingFeaturesBlockProps } from '@/payload-types'
import { FeatureSection } from '@/components/marketing/FeatureSection'
import {
  Zap,
  Shield,
  Users,
  Globe,
  Smartphone,
  Clock,
  Star,
  Heart,
  Target,
  Rocket,
  Lock,
  TrendingUp,
} from 'lucide-react'

// Icon mapping
const iconMap = {
  zap: Zap,
  shield: Shield,
  users: Users,
  globe: Globe,
  smartphone: Smartphone,
  clock: Clock,
  star: Star,
  heart: Heart,
  target: Target,
  rocket: Rocket,
  lock: Lock,
  'trending-up': TrendingUp,
}

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & MarketingFeaturesBlockProps

export const MarketingFeaturesBlock: React.FC<Props> = ({
  variant = 'grid',
  title,
  subtitle,
  features,
  className,
}) => {
  // Only render if we have features
  if (!features?.length) {
    return null
  }

  // Convert Payload data to FeatureSection props
  const mappedFeatures = features.map((feature) => {
    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap

    return {
      icon: <IconComponent className="h-6 w-6" />,
      title: feature.title,
      description: feature.description,
      link:
        feature.link?.text && feature.link?.href
          ? {
              text: feature.link.text,
              href: feature.link.href,
            }
          : undefined,
    }
  })

  // Only render if we have a title and features
  if (!features?.length) {
    return null
  }

  return (
    <FeatureSection
      title={title || 'Features'}
      subtitle={subtitle || undefined}
      features={mappedFeatures}
      layout={variant === 'list' ? 'list' : 'grid'}
      className={className}
    />
  )
}
