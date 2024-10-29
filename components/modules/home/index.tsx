import Container from '@/components/custom/Container'
import Bestseller from './Bestseller'
import Categories from './Categories'
import Comments from './Comments'
import Deals from './Deals'
import Slider from './Slider'
import Stories from './Stories'

export default function Home() {
  return (
    <main>
      <Slider />
      <Container>
        <Categories />
        <Bestseller />
        <Deals />
        <Comments />
        <Stories />
      </Container>
    </main>
  )
}
