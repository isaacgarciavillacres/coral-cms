import React from 'react'
import type { MarketingHeroBlock as MarketingHeroBlockProps } from '@/payload-types'
import { HeroSection } from '@/components/marketing/HeroSection'
import { ArrowRight, Play } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & MarketingHeroBlockProps

export const MarketingHeroBlock: React.FC<Props> = ({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  variant,
  className,
}) => {
  // Convert Payload data to HeroSection props
  const heroProps = {
    badge: badge || undefined,
    title,
    subtitle: subtitle || undefined,
    description,
    variant: variant || 'default',
    className,
    primaryAction: {
      text: primaryAction.text,
      href: primaryAction.href,
      variant: primaryAction.variant || 'default',
      icon: primaryAction.showIcon ? <ArrowRight className="ml-2 h-4 w-4" /> : undefined,
    },
    secondaryAction: secondaryAction?.text
      ? {
          text: secondaryAction.text,
          href: secondaryAction.href || '#',
          variant: secondaryAction.variant || 'outline',
          icon: secondaryAction.showPlayIcon ? <Play className="mr-2 h-4 w-4" /> : undefined,
        }
      : undefined,
    backgroundImage:
      backgroundImage && typeof backgroundImage === 'object'
        ? getMediaUrl(backgroundImage as any)
        : undefined,
  }

  return <HeroSection {...heroProps} />
}
