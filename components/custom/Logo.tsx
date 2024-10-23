import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold">
      <Image src="/assets/images/khal-light-logo.png" alt="Khal Logo" width={40} height={40} />
    </Link>
  )
}
