'use client'
import ProductCard from '@/components/custom/ProductCard'
import { Products } from '@/types'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR, { Fetcher } from 'swr'

import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'

export default function Bestseller() {
  const [screenWidth, setScreenWidth] = useState(false)

  const fetchData: Fetcher<Products[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data, error } = useSWR<Products[]>(
    `${process.env.NEXT_PUBLIC_API}/api/products`,
    fetchData
  )

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth < 575)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (error) return <div>No se pudieron cargar los productos</div>

  return (
    <section>
      <div className="mt-16 mb-10">
        <h4 className="text-center font-semibold text-2xl md:font-medium md:text-3xl">
          Lo más vendido
        </h4>
      </div>

      {!screenWidth ? (
        // is duplicated to complete the grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-11 gap-y-7">
          {data
            ?.filter((product) => product.featured)
            .map((product) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          {data
            ?.slice(0, 3)
            ?.filter((product) => product.featured)
            .map((product) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="bg-slate-50 bestseller"
        >
          {data
            ?.filter((product) => product.featured)
            .map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </section>
  )
}
