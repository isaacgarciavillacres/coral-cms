'use client'

import React, { createContext, use, useCallback, useEffect, useState } from 'react'

import type { Theme } from '@/providers/Theme/types'
import canUseDOM from '@/utilities/canUseDOM'

export interface ContextType {
  headerTheme?: Theme | null
  setHeaderTheme: (theme: Theme | null) => void
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerTheme, setThemeState] = useState<Theme | undefined | null>(undefined)

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet)
  }, [])

  // Hydrate the initial theme after mount
  useEffect(() => {
    if (canUseDOM) {
      const currentTheme = document.documentElement.getAttribute('data-theme') as Theme
      setThemeState(currentTheme)
    }
  }, [])

  return <HeaderThemeContext value={{ headerTheme, setHeaderTheme }}>{children}</HeaderThemeContext>
}

export const useHeaderTheme = (): ContextType => use(HeaderThemeContext)
