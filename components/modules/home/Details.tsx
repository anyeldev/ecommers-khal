'use client'
import DetailsItem from '@/components/custom/DetailsItem'
import { Calendar, CreditCard, Headset, LockKeyhole, Truck } from 'lucide-react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

export default function Details() {
  return (
    <section className="py-7 w-full">
      <Swiper
        breakpoints={{
          360: { slidesPerView: 1, spaceBetween: 40 },
          575: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 40 }
        }}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={5}
        pagination={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="shadow-xl flex items-center justify-center border border-slate-300rounded-md cursor-grab
          active:cursor-grabbing	select-none details"
      >
        <SwiperSlide className="relative py-4 text-center">
          <DetailsItem title="24/7 Soporte" subtitle="En todo momento" Icon={Headset} />
        </SwiperSlide>
        <SwiperSlide className="relative py-4 text-center">
          <DetailsItem title="Medios de pago" subtitle="Visa, PayPal, etc" Icon={CreditCard} />
        </SwiperSlide>
        <SwiperSlide className="relative py-4 text-center">
          <DetailsItem title="Pago garantizado" subtitle="100% Seguro" Icon={LockKeyhole} />
        </SwiperSlide>
        <SwiperSlide className="relative py-4 text-center">
          <DetailsItem title="Envío gratuito" subtitle="Superiores a $ 300" Icon={Truck} />
        </SwiperSlide>
        <SwiperSlide className="relative py-4 text-center">
          <DetailsItem title="Devolución Segura" subtitle="30 días de garantía" Icon={Calendar} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
