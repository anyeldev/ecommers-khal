import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Categories, Pages } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useSWR, { Fetcher } from 'swr'

export default function Menu() {
  const pathname = usePathname()

  const fetchDataCat: Fetcher<Categories[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const fetchDataPag: Fetcher<Pages[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data)

  const { data } = useSWR<Categories[]>(
    process.env.NEXT_PUBLIC_API + '/api/categories',
    fetchDataCat
  )

  const pagesApi = useSWR<Pages[]>(process.env.NEXT_PUBLIC_API + '/api/pages', fetchDataPag)

  return (
    <NavigationMenu className="hidden lg:flex lg:justify-between lg:gap-9 relative w-full">
      <NavigationMenuList className="flex justify-between items-center w-full xl:justify-center xl:gap-32 lg:gap-9">
        {pagesApi.data?.map((page) => (
          <NavigationMenuItem key={page._id} className="relative capitalize text-xl font-medium">
            <Link
              href={page.link}
              className={cn(
                'h-full duration-300 after:block after:top-6 after:left-0 after:w-0 after:h-1 after:bg-primary-500 after:duration-100 after:ease-linear hover:after:w-full capitalize',
                pathname === page.link && 'border-b-2 border-primary-500'
              )}
            >
              <NavigationMenuLink>{page.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem
          className={cn(
            'relative h-full duration-300 after:block after:top-6 after:left-0 after:w-0 after:h-1 after:bg-primary-500 after:duration-100 after:ease-linear hover:after:w-full capitalize',
            pathname === '' && 'border-b-2 border-primary-500'
          )}
        >
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0 m-0 h-auto text-xl font-medium">
            Categorías
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-0 top-0">
            <ul className="grid gap-3 p-4 md:grid-cols-5 lg:w-[900px] list-none">
              {data
                ?.toSorted((a, b) => a.name.localeCompare(b.name))
                .map(
                  (category) =>
                    category.submenu.length > 0 && ( // filter categories without submenu
                      <NavigationMenuItem key={category._id} className="relative capitalize">
                        <NavigationMenuLink className="uppercase font-medium cursor-default">
                          {category.name}
                        </NavigationMenuLink>
                        {category.submenu &&
                          category.submenu.length > 0 &&
                          category.submenu
                            ?.toSorted((a, b) => a.name.localeCompare(b.name))
                            .map((subcategory) => (
                              <NavigationMenuItem key={subcategory._id} className="capitalize py-1">
                                <Link
                                  href={subcategory.link}
                                  className="p-1 hover:bg-slate-100 hover:text-primary-500 cursor-pointer hover:rounded-md duration-100 hover:font-medium"
                                >
                                  <NavigationMenuLink className="text-sm">
                                    {subcategory.name}
                                  </NavigationMenuLink>
                                </Link>
                              </NavigationMenuItem>
                            ))}
                      </NavigationMenuItem>
                    )
                )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
