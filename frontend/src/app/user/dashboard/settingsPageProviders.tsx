'use client'

import { ReactNode } from 'react'
import { SettingsPageContextProvider } from '@/app/user/dashboard/settingsPageContext'

export function SettingsPageProviders({ children }: { children: ReactNode }) {
  return <SettingsPageContextProvider>{children}</SettingsPageContextProvider>
}
