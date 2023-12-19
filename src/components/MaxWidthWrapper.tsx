import { cn } from '@/lib/utils'
import { MaxWidthWrapperProps } from '@/@types'

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1180px] lg:px-[130px]', className)}
    >
      {children}
    </div>
  )
}
