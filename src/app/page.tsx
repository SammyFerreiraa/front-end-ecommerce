import { MaxWidthWrapper } from '@/components'
import HomepageBanner from '@/components/banner-homepage/HomepageBanner'
import Offers from '@/components/offers/Offers'
import { Requests } from '@/components/requests'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11">
        <HomepageBanner />
        <Offers />
        <Requests />
      </MaxWidthWrapper>
    </>
  )
}
