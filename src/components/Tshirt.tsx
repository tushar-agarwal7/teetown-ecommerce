import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string,
  tshirt?:string
}

const Tshirt = ({ imgSrc, className,tshirt, ...props }: TshirtProps) => {
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
          className='object-contain max-w-[80%] max-h-[55%] mt-20 rounded-sm'
          src={imgSrc}
          alt='overlaying image'
        />
      </div>
    </div>
  )
}

export default Tshirt
