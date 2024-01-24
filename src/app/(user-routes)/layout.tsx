import { getServerSession } from 'next-auth'
import { nextAuthOption } from '@/app/api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation'

type PrivateLayoutProps = {
  children: React.ReactNode
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(nextAuthOption)

  if (!session) {
    redirect('/auth')
  }
  return <>{children}</>
}

export default PrivateLayout
