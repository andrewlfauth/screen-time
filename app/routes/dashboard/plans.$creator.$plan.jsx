import {getUnownedPlan} from '~/services/plans.server'
import {useLoaderData} from '@remix-run/react'
import ShowCard from '~/components/ShowCard'
import {useRef} from 'react'
import {RiUser3Fill} from 'react-icons/ri'


export async function loader ({params}) {
  const {creator, plan} = params
  const shows = await getUnownedPlan(creator, plan)
  return {creator, planName: plan, shows}
}

function Index() {
  const data = useLoaderData()
  let colorOptions = [
    'text-blue-600',
    'text-purple-600',
    'text-orange-600',
    'text-green-600',
    'text-pink-600',
    'text-sky-600',
  ]
  let color = useRef(colorOptions[Math.floor(Math.random() * colorOptions.length)])

  return (
    <div className="p-4 bg-white rounded-md shadow lg:w-fit">
      <h2 className='text-xl font-medium'>{data.planName}</h2>
      <span className={`${color.current} flex items-center font-medium text-sm`}>
        <RiUser3Fill  className='mr-1' />
        {data.creator}
      </span>
      <div className='grid gap-4 mt-4 lg:gap-4 sm:grid-cols-2'>
        {
          data.shows.map(s => <ShowCard action="like" key={s.title} show={s} />)
        }
      </div>
    </div>
  )
}

export default Index