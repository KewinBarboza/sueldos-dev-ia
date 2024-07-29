import React from 'react'
import { Skeleton } from './ui/skeleton'

export function Loading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[45px] rounded-none" />
      <div className="space-y-2">
        <Skeleton className="h-4 rounded-none" />
        <div className='flex gap-x-3'>
          <Skeleton className="h-36 rounded-none w-[200px]" />
          <Skeleton className="h-36 rounded-none w-full" />
        </div>
        <div className='flex gap-x-3'>
          <Skeleton className="h-36 rounded-none w-full" />
          <Skeleton className="h-36 rounded-none w-[200px]" />
        </div>

        <Skeleton className="h-[145px] rounded-none" />
        <Skeleton className="h-[145px] rounded-none" />
        <Skeleton className="h-[45px] rounded-none" />
        <Skeleton className="h-[45px] rounded-none" />
      </div>
    </div>
  )
}
