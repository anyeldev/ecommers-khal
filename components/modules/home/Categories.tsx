'use client'
import { Button } from '@/components/ui/button'
import { Slides } from '@/types'
import { useRouter } from 'next/navigation'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR, { Fetcher } from 'swr'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

export default function Categories() {
  const router = useRouter()

  const fetchData: Fetcher<Slides[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data } = useSWR<Slides[]>(process.env.NEXT_PUBLIC_API + '/api/slides', fetchData)

  const renderSlide = (slide: Slides) => {
    return (
      <SwiperSlide
        key={slide._id}
        className="relative hover:scale-105 duration-300 ease-linear cursor-pointer"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: '400px',
          width: '100%'
        }}
        onClick={() => router.push(`/category/${slide.link}`)}
      >
        <div
          className="absolute text-center py-2 mx-5 bg-white rounded-lg cursor-pointer shadow-xl
            bottom-5 hover:bg-primary-600/95 hover:text-white duration-100 ease-linear capitalize w-5/6"
        >
          <h6 className="font-medium">{slide.title}</h6>
        </div>
      </SwiperSlide>
    )
  }

  return (
    <section className="py-7 w-full">
      <div className="mb-10 flex justify-between items-center">
        <h4 className="font-semibold text-2xl md:font-medium md:text-3xl">
          Comprar por Categorías
        </h4>
        <div className="flex gap-3">
          <Button className="prev-slide h-12 hover:bg-primary-600">
            <HiArrowNarrowLeft />
          </Button>
          <Button className="next-slide h-12 hover:bg-primary-600">
            <HiArrowNarrowRight />
          </Button>
        </div>
      </div>

      <Swiper
        breakpoints={{
          360: { slidesPerView: 1, spaceBetween: 40 },
          575: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 4, spaceBetween: 40 }
        }}
        autoplay={{ delay: 4500 }}
        spaceBetween={50}
        slidesPerView={4}
        pagination={false}
        navigation={{ nextEl: '.next-slide', prevEl: '.prev-slide' }}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-slate-50"
      >
        {/* render two slides to see the navigation button: next and previous */}
        {data?.filter((slide) => slide.slug === 'top-categories-home').map(renderSlide)}
        {data?.filter((slide) => slide.slug === 'top-categories-home').map(renderSlide)}
      </Swiper>
    </section>
  )
}
