import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-5 flex w-full flex-row justify-between gap-6 rounded-md bg-white md:px-5 md:py-4 ">
          {/* left */}
          <div className="hidden flex-col justify-between text-sm  lg:flex lg:min-w-[200px] xl:min-w-[250px]">
            <div className="w-full rounded-md bg-sky-100 px-3 py-2 font-bold">
              <p>Electronic</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Clothes and wear</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Home interiors</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Computer and tech</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Electronic</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Electronic</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Electronic</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Electronic</p>
            </div>
            <div className="w-full rounded-md px-3 py-2 text-neutral-600">
              <p>Electronic</p>
            </div>
          </div>
          {/* center */}
          <div className="flex h-auto w-auto items-center justify-center">
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/banner.png"
                className="w-full max-w-[664px] lg:min-w-[400]"
                alt=""
              />
              <div className="absolute left-[10%] top-[10%] flex flex-col gap-5">
                <div className="flex flex-col gap-0">
                  <p className="text-lg text-zinc-900">Latest Trading</p>
                  <p className="text-lg font-semibold text-zinc-900">
                    Electronic Items
                  </p>
                </div>
                <button className="mt-2 rounded-md bg-white px-3 py-2 font-medium  text-blue-600 hover:opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden h-auto max-w-[200px] flex-col items-center justify-between md:flex md:gap-2 md:text-sm xl:gap-0">
            <div className="flex w-full flex-col justify-between gap-2 rounded-md bg-sky-100 p-3 text-sm">
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <img
                  src="/assets/Avatar.png"
                  className="h-10 w-10"
                  alt="Avatar"
                />
                <p>
                  Hi, User, <br />
                  lets get started
                </p>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                Join now
              </Button>
              <Button className="w-full rounded-md bg-white py-2 text-blue-600 hover:bg-gray-100">
                Log in
              </Button>
            </div>
            <div className="w-full rounded-md bg-orange-500 p-4 text-white">
              <p>Get US $10 off with a new supplier</p>
            </div>
            <div className="w-full rounded-md bg-teal-400 p-4 text-white">
              <p>Send quotes with supplier preferences</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
