import Header from '@/components/modules/header'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
