import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
  getDiscountRate
} from '@/lib/utils'
import { Products } from '@/types'
import { ArrowLeftRight, Eye, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import CurrencyFormat from './PriceFormat'

export default function ProductCard({ product }: { product: Products }) {
  const [changeImage, setChangeImage] = useState(0)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const router = useRouter()

  // location the product image of the API
  const images = product?.subProducts[0].options[0].images

  const bestPrice = getBestPriceWithDiscountFromProduct(product)
  const finalPrice = getBestPriceWithoutDiscountFromProduct(product)
  const discountRate = getDiscountRate(bestPrice, finalPrice)

  const addToWishList = () => {
    if (!isInWishlist) {
      toast.success('Añadido a la lista de deseos')
    } else {
      toast.error('Eliminado de la lista de deseos')
    }
    setIsInWishlist(!isInWishlist)

    // TODO: Do logic add to wishlist
  }

  return (
    <div className="flex flex-col gap-4 3xl:px-10">
      <div className="relative group/image">
        <Image
          src={changeImage === 0 ? images[0] : images[1]}
          alt={product.name}
          width={280}
          height={250}
          className={`w-full ${bestPrice === 0 ? 'grayscale opacity-80' : ''}`}
        />
        <div
          className={`absolute text-center py-2 mx-5 bg-white rounded-lg cursor-pointer shadow-xl bottom-5
            hover:bg-primary-600/95 hover:text-white duration-100 ease-linear capitalize w-5/6 ${bestPrice === 0 ? 'hidden' : ''}`}
        >
          <h6 className="font-medium text-base">Añadir al carrito</h6>
        </div>

        <div
          className={`hidden group-hover/image:flex flex-col gap-2 absolute top-4 right-4 ${bestPrice === 0 ? 'group-hover/image:hidden' : ''}`}
        >
          <Button
            className="hover:bg-white bg-white rounded-full text-black hover:text-primary-600"
            size={'icon'}
            onClick={addToWishList}
            title="Añadir a la lista de deseos"
          >
            <Star fill="currentColor" className={isInWishlist ? 'text-primary-600' : ''} />
          </Button>
          <Button
            className="bg-white rounded-full text-black hover:text-white hover:bg-primary-600"
            size={'icon'}
            onClick={() => setChangeImage(changeImage === 0 ? 1 : 0)}
            title="Cambiar imagen"
          >
            <ArrowLeftRight />
          </Button>
          <Button
            className="bg-white rounded-full text-black hover:text-white hover:bg-primary-600"
            size={'icon'}
            onClick={() => router.push(`/products/${product.slug}`)}
            title="Ver producto"
          >
            <Eye />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start justify-between w-full h-full">
        <div>
          <h5 className="capitalize font-bold text-base">
            {product.name.replace(/-/g, ' ').split(' ').slice(0, 3).join(' ')}
          </h5>
          <p className="capitalize text-sm font-normal">{product.description.substring(0, 40)}</p>
        </div>

        <div className="inline-flex justify-start items-start w-full h-full">
          {bestPrice === 0 ? (
            <div className="text-red-600 font-bold">AGOTADO</div>
          ) : (
            <>
              {discountRate < 0 && (
                <div className="flex justify-center items-center">
                  <CurrencyFormat
                    value={bestPrice}
                    className="text-base font-bold w-20 text-primary-700"
                  />
                  <CurrencyFormat
                    value={finalPrice}
                    className="line-through text-sm font-medium opacity-50 hidden lg:flex w-full"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
