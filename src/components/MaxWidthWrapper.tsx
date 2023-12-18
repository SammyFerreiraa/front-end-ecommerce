import { cn } from '@/lib/utils'
import { MaxWidthWrapperProps } from '@/@types'

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto w-full lg:px-[130px]', className)}>
      {children}
    </div>
  )
}
