'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Menu } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface NavigationItem {
  title: string
  href: string
  description?: string
  children?: NavigationItem[]
}

interface NavigationProps {
  logo?: React.ReactNode
  items: NavigationItem[]
  ctaButton?: {
    text: string
    href: string
    variant?: 'default' | 'secondary' | 'outline'
  }
  className?: string
}

export function Navigation({ logo, items, ctaButton, className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {logo && (
            <Link href="/" className="flex items-center space-x-2">
              {logo}
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.title}
                                  </div>
                                  {child.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-foreground/80"
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          {ctaButton && (
            <Button variant={ctaButton.variant || 'default'} asChild>
              <Link href={ctaButton.href}>{ctaButton.text}</Link>
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                {items.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <div className="space-y-2">
                        <p className="font-medium text-sm">{item.title}</p>
                        <div className="ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-sm font-medium hover:text-foreground/80"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

                {ctaButton && (
                  <Button variant={ctaButton.variant || 'default'} asChild className="mt-4">
                    <Link href={ctaButton.href} onClick={() => setIsOpen(false)}>
                      {ctaButton.text}
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

// Usage Notes:
//
// Basic Usage:
// <Navigation
//   logo={<span className="font-bold text-xl">CoralRock</span>}
//   items={[
//     { title: 'Home', href: '/' },
//     { title: 'About', href: '/about' },
//     {
//       title: 'Services',
//       href: '/services',
//       children: [
//         { title: 'Web Development', href: '/services/web', description: 'Modern web applications' },
//         { title: 'Mobile Apps', href: '/services/mobile', description: 'iOS and Android apps' }
//       ]
//     }
//   ]}
//   ctaButton={{ text: 'Get Started', href: '/contact' }}
// />
