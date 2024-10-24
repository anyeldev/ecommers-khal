import Row from '@/components/custom/Row'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import Link from 'next/link'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import CardContent from './CardContent'
import SearchBar from './SearchBar'

interface Props {
  showSearchBar: boolean
  setShowSearchBar: (v: boolean) => void
}

export default function GroupIcons({ showSearchBar, setShowSearchBar }: Props) {
  return (
    <section>
      <Row className="lg:gap-4 gap-2">
        <SearchBar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
        <button title="Buscar..." onClick={() => setShowSearchBar(!showSearchBar)}>
          <CiSearch size={34} className="hover:text-primary-600" />
        </button>
        <button title="Favoritos">
          <CiHeart size={34} className="hover:text-primary-600" />
        </button>
        <Popover>
          <PopoverTrigger className="hidden lg:block relative">
            <CiShoppingCart size={34} className="hover:text-primary-600" />
            <Badge
              variant="outline"
              className="flex items-center justify-center absolute -top-1 -right-1 bg-primary-500 w-5 h-5 text-white"
            >
              0
            </Badge>
          </PopoverTrigger>
          <CardContent />
        </Popover>
        <div className="flex items-center align-middle+">
          <Link href="/login">
            <Button className="ml-4 p-6 hidden md:inline-flex">Login</Button>
            <CiUser size={34} className="md:hidden" />
          </Link>
        </div>
      </Row>
    </section>
  )
}
