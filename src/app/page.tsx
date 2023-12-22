import { MaxWidthWrapper } from '@/components'
import HomepageBanner from '@/components/banner-homepage/HomepageBanner'
import { Offers } from '@/components/offers'
import { RecommendedItems } from '@/components/recommended-items'
import { Requests } from '@/components/requests'

export default async function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
        <HomepageBanner />
        <Offers />
        <Requests />
        <RecommendedItems />
      </MaxWidthWrapper>
    </>
  )
}
