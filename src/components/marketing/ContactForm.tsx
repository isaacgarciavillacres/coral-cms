'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

interface ContactInfo {
  email?: string
  phone?: string
  address?: string
}

interface ContactFormProps {
  title?: string
  description?: string
  showContactInfo?: boolean
  contactInfo?: ContactInfo
  className?: string
  onSubmit?: (data: FormData) => Promise<void>
}

interface FormData {
  name: string
  email: string
  subject?: string
  message: string
  company?: string
}

export function ContactForm({
  title = 'Get in Touch',
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  showContactInfo = true,
  contactInfo,
  className,
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default form submission (you can customize this)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (!response.ok) throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', company: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className={cn('py-24 md:py-32', className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-base">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Message sent successfully!</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">Failed to send message. Please try again.</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            {showContactInfo && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-6">
                    Get in touch with us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo?.email && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{contactInfo.email}</p>
                      </div>
                    </div>
                  )}

                  {contactInfo?.phone && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">{contactInfo.phone}</p>
                      </div>
                    </div>
                  )}

                  {contactInfo?.address && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">{contactInfo.address}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-lg bg-muted/50 p-6">
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    Fast Response
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Usage Notes:
//
// Basic Contact Form:
// <ContactForm />
//
// With Custom Contact Info:
// <ContactForm
//   title="Let's Work Together"
//   description="Ready to start your project? Get in touch with our team."
//   contactInfo={{
//     email: "hello@coralrock.com",
//     phone: "+1 (555) 123-4567",
//     address: "123 Business St, City, State 12345"
//   }}
//   onSubmit={async (data) => {
//     // Custom form submission logic
//     console.log('Form data:', data)
//   }}
// />
//
// Form Only (No Contact Info):
// <ContactForm
//   showContactInfo={false}
//   className="bg-muted/50"
// />
