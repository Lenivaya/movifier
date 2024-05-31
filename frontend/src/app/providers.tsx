'use client'

import { ReactNode } from 'react'
import { ApolloWrapper } from '@/lib'

export function Providers({ children }: { children: ReactNode }) {
  return <ApolloWrapper>{children}</ApolloWrapper>
}
