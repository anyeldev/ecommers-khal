import React from 'react'
import { CountdownRenderProps } from 'react-countdown'

export default function Timer({ days, hours, minutes, seconds }: CountdownRenderProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col text-4xl text-center border border-gray-300 rounded p-2 w-20">
        <span className="font-bold text-3xl">{days}</span>
        <span className="text-sm font-normal">Días</span>
      </div>
      <div className="flex flex-col text-4xl text-center border border-gray-300 rounded p-2 w-20">
        <span className="font-bold text-3xl">{hours}</span>
        <span className="text-sm font-normal">Horas</span>
      </div>
      <div className="flex flex-col text-4xl text-center border border-gray-300 rounded p-2 w-20">
        <span className="font-bold text-3xl">{minutes}</span>
        <span className="text-sm font-normal">Minutos</span>
      </div>
      <div className="flex flex-col text-4xl text-center border border-gray-300 rounded p-2 w-20">
        <span className="font-bold text-3xl">{seconds}</span>
        <span className="text-sm font-normal ">Segundos</span>
      </div>
    </div>
  )
}
