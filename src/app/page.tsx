import { MaxWidthWrapper } from '@/components'
import HomepageBanner from '@/components/banner-homepage/HomepageBanner'
import Offers from '@/components/offers/Offers'
import { RecommendedItems } from '@/components/recommended-items'
import { Requests } from '@/components/requests'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px]">
        <HomepageBanner />
        <Offers />
        <Requests />
        <RecommendedItems />
      </MaxWidthWrapper>
    </>
  )
}
