import FeaturedShow from '~/components/dashboard/FeaturedShow'
import FeaturedPlans from '../../components/plans/FeaturedPlans'
import {getUser} from '~/services/users.server'
import {getFeaturedPlans} from '~/services/plans.server'
import { useLoaderData } from '@remix-run/react'
import Hero from '../../components/dashboard/Hero'
import { userAtom } from "../dashboard"
import {useAtom} from 'jotai'

export async function loader({request}) {
  const user = await getUser(request)
  const featuredPlans = await getFeaturedPlans({request})
  return {user, featuredPlans}
}

function Index() {
  const data = useLoaderData()
  const [, setUser] = useAtom(userAtom)
  setUser(data.user)

  return (
    <div className='md:w-[630px] lg:w-[650px]'>
      <div className='space-y-4'>
        <div className='flex'>
          <Hero />
        </div>
        <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
          <FeaturedShow />
          <FeaturedPlans plans={data.featuredPlans} />
        </div>
      
      </div>
    </div>
  )
}

export default Index