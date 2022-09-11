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
    <div className='flex flex-wrap px-2 py-1 space-x-2'>
      <div className='relative flex flex-col'>
        <SavedPlans plans={data.user.plans} />
        <Link
          className='absolute flex items-center -mt-1 text-xl font-semibold text-blue-900 duration-100 top-2 hover:scale-105 right-2 w-fit' 
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