import { ClapSpinner } from 'react-spinners-kit'

export default function Loading() {
  return (
    <div className="flex items-center justify-center absolute inset-0">
      <ClapSpinner />
    </div>
  )
}
