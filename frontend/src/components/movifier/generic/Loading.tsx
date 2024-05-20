import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

export const Loader = ({ className }: { className?: string }) => {
  return (
    <LoaderCircle
      className={cn(
        'absolute left-1/2 top-1/2 h-16 w-16 text-primary/60 animate-spin',
        className
      )}
    />
  )
}
