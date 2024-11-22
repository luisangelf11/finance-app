"use client"
import React from 'react'

type Props = {
    children?: React.ReactNode,
    title: string
    value: number
}

export default function Card({children, title, value}: Props) {
  return (
    <div className='w-[80%] sm:w-auto p-2 border rounded-md flex justify-center items-center gap-4'>
        {children}
        <div>
            <h3 className='text-xl uppercase font-semibold'>{title}</h3>
            <span className='text-sm font-semibold text-yellow-300'>$RD {value.toFixed(2)}</span>
        </div>
    </div>
  )
}
