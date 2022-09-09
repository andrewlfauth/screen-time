import {getUnownedPlan} from '~/services/plans.server'
import {useLoaderData} from '@remix-run/react'
import ShowCard from '~/components/ShowCard'

export async function loader ({params}) {
  const {creator, plan} = params
  const shows = await getUnownedPlan(creator, plan)
  return {creator, planName: plan, shows}
}

function Index() {
  const data = useLoaderData()
  return (
    <div className="px-2">
      <div className="bg-gray-100 rounded-md p-4 mt-2 lg:w-fit">
        <h2 className='font-semibold text-lg'>{data.planName}</h2>
        <span className='font-semibold text-sm'>
          Created by: {" "}
          <span className='text-base'>{data.creator}</span>
        </span>
        <div className='grid gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 w-fit '>
          {
            data.shows.map(s => <ShowCard action="like" key={s.title} show={s} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Index