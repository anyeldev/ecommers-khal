import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Row({ children, className }: Props) {
  return <div className={cn('flex items-center justify-between h-full', className)}>{children}</div>
}
