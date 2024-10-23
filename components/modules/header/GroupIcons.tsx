import { CiHeart, CiSearch } from 'react-icons/ci'
import Row from '@/components/custom/Row'
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
      </Row>
    </section>
  )
}
