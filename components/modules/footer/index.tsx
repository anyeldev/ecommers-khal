'use client'
import Container from '@/components/custom/Container'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Mail, MapPin, PhoneCallIcon, SendHorizontal } from 'lucide-react'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { toast } from 'sonner'
import {
  AmericanExpressIcon,
  GooglePayIcon,
  MastercardIcon,
  PayPalIcon,
  VisaIcon
} from './GroupCard'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email) // view sent email

    // if email is empty
    if (!email.trim()) {
      toast.error('Por favor, ingresa un correo electrónico.')
      return
    }

    const promise = new Promise((resolve) => setTimeout(resolve, 1500))
    toast.promise(promise, {
      loading: 'Suscribiendo...',
      success: () => {
        setEmail('')
        return '¡Te suscribiste exitosamente!'
      },
      error: 'Error'
    })
  }

  const className = 'flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer'

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          <ul className="flex flex-col gap-4 ">
            <li className="mt-10 mb-5 text-white">
              <h4>KHAL</h4>
            </li>
            <li className={className}>
              <PhoneCallIcon color="currentColor" />
              123 456 789
            </li>
            <li className={className}>
              <Mail color="currentColor" />
              khal@khal.com
            </li>
            <li className={className}>
              <MapPin color="currentColor" />
              123 Main St, USA
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="mt-10 text-white">
              <h6>Información</h6>
            </li>
            <li className={className}>Mi cuenta</li>
            <li className={className}>Login</li>
            <li className={className}>Mi carrito</li>
            <li className={className}>Mi lista de deseos</li>
            <li className={className}>Verificar</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="mt-10 text-white">
              <h6>Servicio</h6>
            </li>
            <li className={className}>Quiénes somos</li>
            <li className={className}>Carreras</li>
            <li className={className}>Información de entrega</li>
            <li className={className}>Política de privacidad</li>
            <li className={className}>Términos y condiciones</li>
          </ul>
          <div className="md:contents lg:block  ">
            <div>
              <h6 className="mt-10 text-white">Suscribirse</h6>
              <p className="mt-4 font-normal text-sm">
                Introduzca su dirección de correo electrónico para ser el primero en conocer las
                nuevas colecciones y lanzamientos de productos.
              </p>
            </div>
            <div className="flex flex-col justify-center mt-4">
              <form
                onSubmit={handleSubmit}
                className="flex items-center outline outline-1 outline-white rounded-md pl-2 pr-1 hover:outline-primary-600"
              >
                <Mail />
                <Input
                  type="email"
                  className="text-white bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none tracking-wider"
                  placeholder="jhondoe@jhondoe.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <button
                  type="submit"
                  className="bg-primary-700 py-1 px-2 rounded-md active:bg-primary-900"
                  title="Enviar"
                >
                  <SendHorizontal />
                </button>
              </form>
            </div>
          </div>
        </div>
        <Separator className="mt-10 mb-3 bg-gray-500" />

        <div className="flex flex-col items-center sm:flex-row justify-between pb-4">
          <div className="flex gap-2 order-last sm:order-none mt-4 sm:mt-0">
            <VisaIcon />
            <MastercardIcon />
            <GooglePayIcon />
            <AmericanExpressIcon />
            <PayPalIcon />
          </div>
          <span className="hidden lg:block text-sm text-slate-300 font-light">
            © 2024 Khal. Todos los derechos reservados.
          </span>
          <div className="flex gap-4">
            <FaFacebookF size={24} title="Facebook" />
            <FaInstagram size={24} title="Instagram" />
            <FaXTwitter size={24} title="Twitter" />
          </div>
        </div>
        <span className="flex justify-center text-sm text-slate-300 font-light lg:hidden pb-4">
          © 2024 Khal. Todos los derechos reservados.
        </span>
      </Container>
    </footer>
  )
}
