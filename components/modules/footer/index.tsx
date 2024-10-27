import Container from '@/components/custom/Container'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Mail, MapPin, PhoneCallIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ul className="flex flex-col gap-4 ">
            <li className="mt-10 mb-5 text-white">
              <h4>KHAL</h4>
            </li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">
              <PhoneCallIcon color="currentColor" />
              123 456 789
            </li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">
              <Mail color="currentColor" />
              khal@khal.com
            </li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">
              <MapPin color="currentColor" />
              123 Main St, Anytown USA
            </li>
          </ul>
          {/* prettier-ignore */}
          <ul className="flex flex-col gap-4">
            <li className="mt-10 text-white">
              <h6>Información</h6>
            </li>
            {/* prettier-ignore */}
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Mi cuenta</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Login</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Mi carrito</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Mi lista de deseos</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Verificar</li>
          </ul>
          {/* prettier-ignore */}
          <ul className="flex flex-col gap-4">
            <li className="mt-10 text-white">
              <h6>Servicio</h6>
            </li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Quiénes somos</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Carreras</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Información de entrega</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Política de privacidad</li>
            <li className="flex gap-4 hover:text-primary-600 hover:font-semibold cursor-pointer">Términos y condiciones</li>
          </ul>
          <div>
            <h6 className="mt-10 text-white">Suscribirse</h6>
            <p className="mt-4 text-base font-normal">
              Introduzca su dirección de correo electrónico para ser el primero en conocer las
              nuevas colecciones y lanzamientos de productos.
            </p>
            <div className="flex flex-col mt-4">
              <Input className="text-white bg-slate-900" placeholder="jhondoe@jhondoe.com" />
            </div>
          </div>
        </div>
        <Separator className="mt-10 mb-3 bg-gray-500" />
        <div>© 2023 Khal. Todos los derechos reservados.</div>
      </Container>
    </footer>
  )
}
