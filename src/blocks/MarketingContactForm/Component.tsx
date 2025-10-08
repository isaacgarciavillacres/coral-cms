import React from 'react'
import type { MarketingContactFormBlock as MarketingContactFormBlockProps } from '@/payload-types'
import { ContactForm } from '@/components/marketing/ContactForm'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & MarketingContactFormBlockProps

export const MarketingContactFormBlock: React.FC<Props> = ({
  title,
  subtitle,
  description,
  formCfg,
  submitButton,
  successMessage,
  layout = 'card',
  className,
}) => {
  // Return early if required data is missing
  if (!formCfg || !submitButton) {
    return null
  }

  // Convert Payload data to ContactForm props
  const contactFormProps = {
    title: title || undefined,
    subtitle: subtitle || undefined,
    description: description || undefined,
    submitUrl: formCfg.submitUrl || '/api/contact',
    showNameField: formCfg.showNameField ?? true,
    showCompanyField: formCfg.showCompanyField ?? true,
    showPhoneField: formCfg.showPhoneField ?? true,
    showSubjectField: formCfg.showSubjectField ?? false,
    requiredFields: formCfg.reqFields || ['name', 'email', 'message'],
    submitButtonText: submitButton.text || 'Send Message',
    submitButtonLoadingText: submitButton.loadingText || 'Sending...',
    submitButtonVariant: submitButton.variant || 'default',
    successMessage: successMessage || "Thank you for your message! We'll get back to you soon.",
    layout,
    className,
  }

  return <ContactForm {...contactFormProps} />
}
