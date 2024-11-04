'use client'
import Timer from '@/components/custom/Timer'
import { Button } from '@/components/ui/button'
import { Slides } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Countdown from 'react-countdown'
import { HiArrowNarrowRight } from 'react-icons/hi'
import useSWR, { Fetcher } from 'swr'

export default function Deals() {
  const router = useRouter()

  const fetchData: Fetcher<Slides[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data } = useSWR<Slides[]>(`${process.env.NEXT_PUBLIC_API}/api/slides`, fetchData)

  const deals = data?.filter((deals: Slides) => deals.slug === 'cta-home')[0]

  return (
    <section className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
        <div className="flex flex-col items-start gap-5">
          <h4 className="font-semibold text-2xl md:font-medium md:text-3xl">Ofertas del Mes</h4>
          <p className="text-base text-justify md:text-start">
            ¡Bienvenido a nuestra sección de Ofertas del Mes! Encontrarás descuentos exclusivos en
            una amplia selección de productos que no querrás perderte. Aprovecha precios increíbles
            y ahorra mientras te das un capricho.
          </p>
          <p className="text-base text-justify md:text-start">
            Ofertas por tiempo limitado. <strong>¡Compra ya y ahorra!</strong>
          </p>

          <Countdown date={Date.now() + 8.64e8} renderer={Timer} className="text-2xl" />

          <Button
            variant="default"
            size="lg"
            className="capitalize mt-5 hover:scale-105 hover:bg-primary-600 ease-linear"
            onClick={() => router.push(`/category/${deals?.link}`)}
          >
            Ver todos los productos <HiArrowNarrowRight />
          </Button>
        </div>
        <div className="flex justify-end">
          <Image src={deals?.image || ''} width="800" height="800" alt="Imagen de oferta" />
        </div>
      </div>
    </section>
  )
}
