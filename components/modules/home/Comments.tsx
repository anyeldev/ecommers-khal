'use client'
import Container from '@/components/custom/Container'
import { ReviewCard } from '@/components/custom/ReviewCard'
import { Button } from '@/components/ui/button'
import { Review } from '@/types'
import { useEffect, useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

export default function Comments() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/mock.json')
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) return <div>Cargando...</div>

  return (
    <section className="bg-slate-100 mt-24 py-14">
      <Container>
        <div className="mb-10 flex justify-between items-center">
          <h4 className="font-semibold text-2xl md:font-medium md:text-3xl">
            La opinión de nuestros clientes
          </h4>
          <div className="flex gap-3">
            <Button className="prev-comment h-12 hover:bg-primary-600">
              <HiArrowNarrowLeft />
            </Button>
            <Button className="next-comment h-12 hover:bg-primary-600">
              <HiArrowNarrowRight />
            </Button>
          </div>
        </div>
        <div className="flex gap-7">
          <Swiper
            breakpoints={{
              360: { slidesPerView: 1, spaceBetween: 40 },
              575: { slidesPerView: 1, spaceBetween: 40 },
              768: { slidesPerView: 1, spaceBetween: 40 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
              1280: { slidesPerView: 2, spaceBetween: 40 },
              1440: { slidesPerView: 3, spaceBetween: 40 }
            }}
            slidesPerView={3}
            navigation={{ nextEl: '.next-comment', prevEl: '.prev-comment' }}
            modules={[Navigation]}
            className="bg-transparent"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
