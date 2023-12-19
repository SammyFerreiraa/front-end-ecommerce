import { MaxWidthWrapper } from '@/components'
import HomepageBanner from '@/components/banner-homepage/HomepageBanner'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center">
        <HomepageBanner />
      </MaxWidthWrapper>
    </>
  )
}
