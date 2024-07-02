import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface Tshirt2Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string,
  tshirt?:string
}

const Tshirt2 = ({ imgSrc, className,tshirt, ...props }: Tshirt2Props) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={tshirt}
        className='pointer-events-none z-50 select-none w-full h-auto'
        alt='T-shirt image'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <img
          className='object-contain min-w-full min-h-full'
          src={imgSrc}
          alt='overlaying image'
        />
      </div>
    </div>
  )
}

export default Tshirt2
