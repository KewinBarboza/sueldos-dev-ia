import React from 'react'
import { Button } from './ui/button'
import { HandCoins } from 'lucide-react'
import { ButtonReset } from './ButtonReset'

export function Navbar() {
  return (
    <header className="flex w-full h-[57px] py-2 items-center border-slate-300 border-r border-l border-t gap-1 bg-transparent px-4">
      <Button variant="outline" size="icon" aria-label="Home">
        <HandCoins className="size-5 fill-foreground" />
      </Button>
      <h1 className="text-xl font-semibold">Salary Dev</h1>

      <ButtonReset />
    </header>
  )
}
