import Loading from '@/components/custom/Loading'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { getBestPriceWithDiscountFromProduct } from '@/lib/utils'
import type { Products } from '@/types'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
    // TODO: add logic search
    setSearch(event.target.value)
  }

  return (
    <>
      <Dialog open={showSearchBar} onOpenChange={setShowSearchBar}>
        <DialogContent className="lg:max-w-4xl">
          <div className="flex items-center w-full gap-4">
            <Search size={24} className="hover:text-primary-600" />
            <Input
              className="focus-visible:ring-0 border-0 border-b-2 focus-visible:ring-offset-0 font-medium text-base"
              placeholder="Buscar..."
              onInput={handleSearch}
            />
          </div>
          <div className="flex overflow-y-auto w-full py-12 gap-12 flex-col justify-start h-[600px]">
            {!isLoading ? (
              data?.map((product) => (
                <div
                  key={product._id}
                  className="group flex flex-col justify-start items-center gap-8 px-8 lg:h-fit lg:flex-row
                  lg:justify-between hover:border-gray-50 hover:scale-105 transition-all hover:shadow-lg"
                  role="button"
                  onClick={() => router.push(`/products/${product.slug}`)}
                >
                  <Image
                    src={product.subProducts[0].options[0].images[0]}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <h6 className="">{product.name.substring(0, 100)}</h6>
                  <div className="w-40 text-right font-bold text-xl text-primary-700">
                    {getBestPriceWithDiscountFromProduct(product)}
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
