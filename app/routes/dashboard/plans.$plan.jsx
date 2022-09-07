import {getUser} from '~/services/users.server'
import { useLoaderData} from '@remix-run/react'
import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'

export async function loader({request, params}) {
  const planName = await params.plan
  const user = await getUser(request)
  const plan = user.plans.find(p => p.name === planName)
  const planShows = shows.filter((s) => plan.images.includes(s.image))
  return {name: plan.name, show: planShows}
}

function Index() {
  const plan = useLoaderData()
  
  return (
    <div className="px-2">
      <div className="bg-gray-100 rounded-md p-4 mt-2 lg:w-fit">
        <h2 className='font-semibold text-lg'>{plan.name}</h2>
        <div className='grid gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 w-fit '>
          {
            plan.show.map(s => <ShowCard action="like" key={s.title} show={s} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Index