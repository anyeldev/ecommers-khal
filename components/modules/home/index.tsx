import Container from '@/components/custom/Container'
import Bestseller from './Bestseller'
import Categories from './Categories'
import Comments from './Comments'
import Deals from './Deals'
import Details from './Details'
import Slider from './Slider'
import Stories from './Stories'

export default function Home() {
  return (
    <main>
      <Slider />
      <Container>
        <Details />
        <Categories />
        <Bestseller />
        <Deals />
        <Comments />
        <Stories />
      </Container>
    </main>
  )
}
