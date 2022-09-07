import {Link} from '@remix-run/react'
import {useEffect, useState, useRef} from 'react'

// Dynamic param of the plan name
// Must make sure plan name is always unique
function PlanLink({plan}) {
  const [srcIdx, setSrcIdx] = useState(0)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setSrcIdx((srcIdx + 1) % plan.images.length)
    }, 1500) 

    return () => clearTimeout(timerRef.current)
  }, [plan.images.length, srcIdx])

  return (
    <Link
      to={`/dashboard/plans/${plan.name}`}
      className="bg-white font-bold text-lg flex items-start rounded-md shadow p-4 block w-fit border-2 border-white hover:border-emerald-500"
    >
      {plan.name}
      <img 
        src={plan.images[srcIdx]} 
        alt="" 
        className='w-20 rounded ml-4' />
    </Link>
  )
}

export default PlanLink