'use client'

import { ReactNode } from 'react'
import { DashboardPageContextProvider } from '@/app/user/dashboard/dashboardPageContext'

export function DashboardPageProviders({ children }: { children: ReactNode }) {
  return <DashboardPageContextProvider>{children}</DashboardPageContextProvider>
}
