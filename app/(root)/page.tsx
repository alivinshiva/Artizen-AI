import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
     <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-xl font-bold text-gray-700">
            **Free credits for beta users have been exhausted. Please check back later for updates!
          </p>
        </div>
      <section className="home">
        <Link href='/'>
          <h1 className="home-heading">
            Ignite Your Imagination
          </h1>
          <div className='flex justify-center whitespace-nowrap space-x-5 text-3xl lg:text-5xl'>
            <h2 className="home-heading">With</h2>
            <div className='relative'>
              <div className='absolute bg-white -left-2 -top-1 -bottom-0 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1' />
              <p className='relative h1-semibold max-w-[500px] flex-wrap text-center shadow-sm text-purple-500'>Artizen AI!</p>

            </div>
          </div>
        </Link>
       
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}

        </ul>

      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home