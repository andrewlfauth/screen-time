import FeaturedShow from '~/components/dashboard/FeaturedShow'
import SavedPlans from '../../components/plans/SavedPlans'
import FeaturedPlans from '../../components/plans/FeaturedPlans'
import {getUser} from '~/services/users.server'
import {getFeaturedPlans} from '~/services/plans.server'
import { useLoaderData, Link } from '@remix-run/react'
import {AiOutlinePlusCircle} from 'react-icons/ai'


export async function loader({request}) {
  const user = await getUser(request)
  const featuredPlans = await getFeaturedPlans({request})
  return {user, featuredPlans}
}

function Index() {
  const data = useLoaderData()

  return (
    <div className='px-2 py-1 flex flex-wrap space-x-2'>
      <div className='flex flex-col relative'>
        <SavedPlans plans={data.user.plans} />
        <Link
          className='absolute top-2 flex items-center text-blue-900 -mt-1 hover:scale-105 duration-100 block font-semibold text-xl right-2 w-fit' 
          to='/dashboard/plans'
        >
          <AiOutlinePlusCircle className='text-3xl' />
        </Link>
      </div>
      <FeaturedPlans plans={data.featuredPlans} />
      <FeaturedShow />
    </div>
  )
}

export default Index