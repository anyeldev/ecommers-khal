import CurrencyFormat from '@/components/custom/PriceFormat'
import { PopoverContent } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'
import { PiTrashLight } from 'react-icons/pi'

export default function CardContent() {
  return (
    <>
      <PopoverContent className="absolute top-0 -right-7 h-fit w-80 bg-white shadow-2xl">
        <div className="flex flex-col justify-between gap-4">
          <span className="text-center pt-4">
            You have <strong>0</strong> items in your cart.
          </span>
          <ScrollArea className="border-b border-gray-200 pb-4 mr-1">
            <div className="flex flex-col span-y gap-6 max-h-80 px-4">
              {/* TODO: Add cart items :👇 */}
              <div className="flex justify-between  gap-4 snap-center cursor-grab">
                <Image src="" alt="" width={200} height={200} className="h-20 w-20 object-cover" />
                <div className="flex flex-col gap-1">
                  <span className="capitalize">Nombre del producto</span>
                  <div className="inline-flex gap-4 font-bold">
                    <span className="font-bold">2</span>
                    <span className="font-medium">X</span>
                    <span className="font-bold">$ 100</span>
                  </div>
                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span className="font-medium">Style:</span>
                      <span className="font-bold">style</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span className="font-medium">Option:</span>
                      <span className="font-bold">option</span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-start"
                  role="button"
                  onClick={() => {}} // TODO: Add logic delete by id
                >
                  <PiTrashLight size={24} className="hover:text-red-600" title="Eliminar" />
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="flex flex-col gap-4 p-4 pt-0">
            <div className="flex justify-between">
              <h6 className="font-bold">Total: </h6>
              <strong>
                <CurrencyFormat value={15747.5} className="text-right font-medium bg-white" />
              </strong>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/cart"
                className="text-center rounded-sm hover:bg-primary-600 hover:text-white px-4 py-2 border border-gray-200"
              >
                <span>Ver carrito</span>
              </Link>
              <Link
                href="/checkout"
                className="text-center rounded-sm px-4 py-2 bg-red-500 text-white"
              >
                <span>Realizar pago</span>
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </>
  )
}
