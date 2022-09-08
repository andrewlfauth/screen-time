import {Link} from '@remix-run/react'

function PlanLink({plan}) {
  return (
    <Link
      to={`/dashboard/plans/${plan.name}`}
      className="bg-white font-bold text-lg flex items-start rounded-md shadow p-4 block w-fit border-2 border-white hover:border-emerald-500"
    >
      <span>{plan.name}</span>
      <img 
        src={plan.images[0]} 
        alt="" 
        className='w-20 rounded ml-4' />
    </Link>
  )
}

export default PlanLink