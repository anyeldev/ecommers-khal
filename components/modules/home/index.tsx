import Container from '@/components/custom/Container'
import Bestseller from './Bestseller'
import Categories from './Categories'
import Comments from './Comments'
import Deals from './Deals'
import Details from './Details'
import Slider from './Slider'

export default function Home() {
  return (
    <main>
      <Slider />
      <Container>
        <Details />
        <Categories />
        <Bestseller />
        <Deals />
      </Container>
      <Comments />
    </main>
  )
}
