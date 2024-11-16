import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'This is a dashboard app'
}

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-2xl uppercase font-bold border-b border-yellow-300 p-2'>My dashboard</h2>
        {children}
    </div>
  )
}
