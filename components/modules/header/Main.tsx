'use client'
import { useState } from 'react'
import Container from '@/components/custom/Container'
import GroupIcons from './GroupIcons'
import Logo from '@/components/custom/Logo'
import Menu from './Menu'
import MobileIcon from './MobileIcon'
import Row from '@/components/custom/Row'

export default function Main() {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <section className="h-full w-full">
      <Container>
        <Row>
          <MobileIcon />
          <Logo />
          <Menu />
          <GroupIcons showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
        </Row>
      </Container>
    </section>
  )
}
