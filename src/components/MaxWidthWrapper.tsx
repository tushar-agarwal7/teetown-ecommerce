import { ReactNode } from "react"
import { cn } from '@/lib/utils'


const MaxWidthWrapper = ({
    children,
    classname
}:{
    classname:string,
    children:ReactNode
}) => {
  return (
    <div className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        classname
    )}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper