'use client'

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from 'next-themes'
import * as React from 'react'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  return { theme, setTheme }
}
