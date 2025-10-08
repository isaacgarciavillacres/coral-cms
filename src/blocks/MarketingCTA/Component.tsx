import React from 'react'
import type { MarketingCTABlock as MarketingCTABlockProps } from '@/payload-types'
import { CTASection } from '@/components/marketing/CTASection'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & MarketingCTABlockProps

export const MarketingCTABlock: React.FC<Props> = ({
  variant = 'default',
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className,
}) => {
  // Convert Payload data to CTASection props
  const ctaProps = {
    title,
    subtitle: subtitle || undefined,
    description: description || undefined,
    variant: variant || 'default',
    className,
    primaryAction: {
      text: primaryAction.text,
      href: primaryAction.href,
      variant: primaryAction.variant || 'default',
    },
    secondaryAction: secondaryAction?.text
      ? {
          text: secondaryAction.text,
          href: secondaryAction.href || '#',
          variant: secondaryAction.variant || 'outline',
        }
      : undefined,
    backgroundImage:
      backgroundImage && typeof backgroundImage === 'object'
        ? getMediaUrl(backgroundImage as any)
        : undefined,
  }

  return <CTASection {...ctaProps} />
}
