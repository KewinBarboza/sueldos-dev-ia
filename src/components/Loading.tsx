import React from 'react'
import { Skeleton } from './ui/skeleton'
import { ScrollArea } from './ui/scroll-area'

export function Loading() {
  return (
    <ScrollArea className="flex flex-col space-y-3 px-4 overflow-y-auto min-h-[90dvh] max-h-[68dvh]">
      <Skeleton className="h-[45px] rounded-none" />
      <div className="space-y-2">
        <Skeleton className="h-4 rounded-none" />
        <div className='flex gap-x-3'>
          <Skeleton className="h-36 rounded-none w-[400px] md:w-[200px]" />
          <Skeleton className="h-36 rounded-none w-full" />
        </div>
        <div className='flex gap-x-3'>
          <Skeleton className="h-36 rounded-none w-full" />
          <Skeleton className="h-36 rounded-none w-[400px] md:w-[200px]" />
        </div>

        <Skeleton className="h-[145px] rounded-none" />
        <Skeleton className="h-[145px] rounded-none" />
        <Skeleton className="h-[45px] rounded-none" />
        <Skeleton className="h-[45px] rounded-none" />
      </div>
    </ScrollArea>
  )
}
