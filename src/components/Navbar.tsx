import React from 'react'
import { Button } from './ui/button'
import { HandCoins } from 'lucide-react'
import { ButtonReset } from './ButtonReset'

export function Navbar() {
  return (
    <header className="md:flex w-full h-[65px] items-center border-slate-300 border-r border-l border-t gap-1 bg-transparent px-4">
      <div className='flex items-center gap-x-2'>
        <Button variant="outline" size="icon" className='p-1' aria-label="Home">
          <HandCoins className="size-16" />
        </Button>
        <div>
          <h1 className="text-xl font-semibold">Salary Dev</h1>
          <div className='gap-x-2 text-sm text-neutral-500 text-pretty'>
            Creado por
            <a className='text-blue-500 underline hover:text-blue-700 mx-1' href="http://kewinbarboza.com" target="_blank" rel="noopener noreferrer">Kewin Barboza</a>
            para la hackaton de
            <a className='text-blue-500 underline hover:text-blue-700 mx-1' href="http://midu.dev" target="_blank" rel="noopener noreferrer">midudev</a> with
            <a className='text-blue-500 underline hover:text-blue-700 mx-1' href="https://sdk.vercel.ai" target="_blank" rel="noopener noreferrer">vercel SDK IA</a>
          </div>
        </div>
      </div>

      <ButtonReset />
    </header>
  )
}
