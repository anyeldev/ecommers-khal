import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={cn('container w-full h-full', className)}>{children}</div>
  )
}
