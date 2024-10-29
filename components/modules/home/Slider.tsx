'use client'
import Container from '@/components/custom/Container'
import { Button } from '@/components/ui/button'
import { Slides } from '@/types'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR, { Fetcher } from 'swr'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

export default function Slider() {
  const fetchDataCat: Fetcher<Slides[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data } = useSWR<Slides[]>(process.env.NEXT_PUBLIC_API + '/api/slides', fetchDataCat)

  return (
    <div className="bg-slate-200 mx-4">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[70vh]"
      >
        {data
          ?.filter((slide) => slide.slug === 'banner-home')
          .map((slide) => (
            <SwiperSlide
              key={slide._id}
              className="h-full bg-cover bg-top"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Container>
                {slide.title !== '' ? (
                  <div
                    className="h-full absolute drop-shadow-2xl flex flex-col items-center lg:items-start
                   justify-center gap-2 capitalize 2xl:left-20"
                  >
                    <h4 className="font-medium">{slide.subtitle}</h4>
                    <h1 className="text-3xl lg:text-6xl">{slide.title}</h1>
                    <h6 className="font-medium">{slide.description}</h6>
                    <Button className="capitalize mt-5 hover:scale-105">
                      {slide.btn} <HiArrowNarrowRight />
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <Button
                      className="py-6 px-9 rounded-none hover:scale-105 transition-all bg-white
                    text-black hover:text-white border-2 border-slate-900"
                    >
                      <Link href={slide.link}>COMPRAR AHORA</Link>
                    </Button>
                  </div>
                )}
              </Container>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
