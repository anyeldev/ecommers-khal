interface Props {
  title: string
  subtitle: string
  Icon: React.ElementType
}

export default function DetailsItem({ title, subtitle, Icon }: Props) {
  return (
    <div className="flex items-center gap-4 sm:after:h-10 sm:after:w-[2px] after:translate-x-12 after:bg-neutral-200">
      {Icon && <Icon className="text-primary-600 h-6 w-6 cursor-grab active:cursor-grabbing" />}
      <div className="flex flex-col gap-1 mb-4 xl:mb-0">
        <h6 className="uppercase text-sm">{title}</h6>
        <span className="text-xs font-light">{subtitle}</span>
      </div>
    </div>
  )
}
