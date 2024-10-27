'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Categories, Pages, SubCategory } from '@/types'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import { useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { CiMenuBurger } from 'react-icons/ci'

export default function Sidebar() {
  const [show, setShow] = useState(false)
  const [subCategory, setSubCategory] = useState<SubCategory[]>()

  // client side data fetching
  const fetchDataCat: Fetcher<Categories[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const fetchDataPag: Fetcher<Pages[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data, error, isLoading } = useSWR<Categories[]>(
    process.env.NEXT_PUBLIC_API + '/api/categories',
    fetchDataCat
  )
  const pagesApi = useSWR<Pages[]>(process.env.NEXT_PUBLIC_API + '/api/pages', fetchDataPag)

  if (error) return <div>No se pudo cargar las categorías</div>
  if (pagesApi.error) return <div>No se pudo cargar las páginas</div>

  const handleClick = (submenu: SubCategory[] | undefined) => () => {
    setShow(!show)
    setSubCategory(submenu)
  }

  return (
    <>
      {isLoading && 'Cargando...'}
      <Sheet>
        <SheetTrigger>
          <CiMenuBurger size={34} className="hover:text-primary-600" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className={cn('px-4 w-full [&>#closeBtn]:text-[45px]', 'md:w-[400px]')}
        >
          <Tabs defaultValue="categories" className="mt-6">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="categories">Categorías</TabsTrigger>
              <TabsTrigger value="pages">Páginas</TabsTrigger>
            </TabsList>
            <TabsContent value="categories">
              <ul className="flex flex-col gap-2 h-full mt-5">
                {data &&
                  data
                    .toSorted((a, b) => a.name.localeCompare(b.name))
                    .slice(0, 20)
                    .map((category) => {
                      const hasSubmenu = category?.submenu && category.submenu.length > 0
                      return (
                        <li
                          key={category._id}
                          className="group py-3 px-4 hover:bg-slate-100 hover:text-primary-500 cursor-pointer hover:rounded-md"
                          onClick={hasSubmenu ? handleClick(category.submenu) : undefined}
                        >
                          <div className="flex items-center gap-4">
                            <span className="capitalize text-[14px] ">{category.name}</span>
                            {hasSubmenu && (
                              <FaChevronRight
                                className="ms-auto text-icon hover:text-primary-500"
                                onClick={handleClick(category.submenu)}
                              />
                            )}
                          </div>
                        </li>
                      )
                    })}
              </ul>
            </TabsContent>
            <TabsContent value="pages">
              <ul className="flex flex-col gap-2 h-full mt-5">
                {pagesApi.data?.map((page) => (
                  <li
                    key={page._id}
                    className="group py-3 px-4 hover:bg-slate-100 hover:text-primary-500 cursor-pointer hover:rounded-md"
                  >
                    <Link href={page.link}>
                      <div className="flex items-center gap-4">
                        <span className="capitalize text-[14px]">{page.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          side="right"
          className="px-4 w-full [&>#closeBtn]:hidden md:w-[400px] bg-white"
        >
          <div className="duration-300 ease-in p-8 absolute top-0 right-0 h-screen w-full">
            <Button
              className="hover:bg-primary-700 hover:text-white"
              onClick={() => setShow(!show)}
              title="Atrás"
              variant="default"
            >
              <FaChevronLeft /> Atrás
            </Button>
            <ul className="flex flex-col gap-2 justify-center capitalize mt-5">
              <Separator />
              {subCategory &&
                subCategory.map((subcategory) => (
                  <li
                    key={subcategory._id}
                    className="group py-3 px-4 hover:bg-slate-100 hover:text-primary-500 cursor-pointer hover:rounded-md font-medium"
                  >
                    <Link href={`/categories/${subcategory.link}/products`}>
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
