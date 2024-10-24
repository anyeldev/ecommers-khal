import { cn } from '@/lib/utils'
import { NumericFormat } from 'react-number-format'

export default function CurrencyFormat({
  value = 0,
  className
}: {
  value: number
  className?: string
}) {
  return (
    <NumericFormat
      className={cn(
        'tracking-wider text-xl font-normal inline-flex max-w-40 outline-none',
        className
      )}
      value={value}
      prefix="$ "
      thousandSeparator=","
      decimalSeparator="."
      fixedDecimalScale
      decimalScale={2}
      disabled
    />
  )
}
