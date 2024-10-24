import Loading from '@/components/custom/Loading'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getBestPriceWithDiscountFromProduct } from '@/lib/utils'
import type { Products } from '@/types'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import useSWR, { type Fetcher } from 'swr'

interface Props {
  showSearchBar: boolean
  setShowSearchBar: (v: boolean) => void
}

export default function SearchBar({ showSearchBar, setShowSearchBar }: Props) {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const fetchDataCat: Fetcher<Products[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data, error, isLoading } = useSWR<Products[]>(
    `${process.env.NEXT_PUBLIC_API}/api/products?search=${search}`,
    fetchDataCat
  )

  if (error) return <div>No se pudo cargar los productos</div>

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <Dialog open={showSearchBar} onOpenChange={setShowSearchBar}>
      <DialogContent className="lg:max-w-4xl py-6 pl-6 pr-3">
        <div className="flex items-center w-full gap-4 pr-3">
          <Search size={24} className="hover:text-primary-600" />
          <Input
            className="focus-visible:ring-0 border-0 border-b-2 focus-visible:ring-offset-0 font-medium text-base"
            placeholder="Buscar..."
            onInput={handleSearch}
          />
        </div>
        <ScrollArea>
          <div className="flex pt-6 gap-12 flex-col justify-start h-[600px]">
            {!isLoading ? (
              data && data.length > 0 ? (
                data?.map((product) => (
                  <div
                    key={product._id}
                    className="flex justify-around items-center gap-8 lg:h-fit lg:flex-row hover:border-gray-50 transition-all hover:shadow-lg lg:justify-between lg:px-8"
                    role="button"
                    onClick={() => router.push(`/products/${product.slug}`)}
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={product.subProducts[0].options[0].images[0]}
                        alt={product.name}
                        width={80}
                        height={80}
                      />
                      <h6 className="text-base font-medium">{product.name.substring(0, 100)}</h6>
                    </div>
                    <div className="w-40 text-right font-bold text-xl text-primary-700">
                      {`$ ${getBestPriceWithDiscountFromProduct(product)}`}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col justify-center items-center text-gray-500 pt-10">
                  No se encontraron productos.
                  <MdOutlineRemoveShoppingCart
                    size={150}
                    className="pt-8 text-gray-200 cursor-auto"
                  />
                </div>
              )
            ) : (
              <Loading />
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
