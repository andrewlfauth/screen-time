import {Link} from '@remix-run/react'
import {useEffect, useState, useRef} from 'react'

function PlanLink({plan, creator}) {
  const [srcIdx, setSrcIdx] = useState(0)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setSrcIdx((srcIdx + 1) % plan.images.length)
    }, 2000) 

    return () => clearTimeout(timerRef.current)
  }, [plan.images.length, srcIdx])

  return (
    <Link
      to={`/dashboard/plans/${plan.name}`}
      className="bg-white font-bold text-lg flex items-start rounded-md shadow p-4 block w-fit border-2 border-white hover:border-emerald-500"
    >
      <span className='block'>{plan.name}</span>
      <div className='w-24 h-10 rounded relative'>
        {plan.images.map((img, idx) => {
          return (
            <img 
            key={idx}
            src={plan.images[idx]} 
            alt="" 
            className={`${idx == srcIdx ? "opacity-100" : "opacity-0"} rounded ml-4 duration-500 absolute w-20`} />
          )
        })}
      </div>
      {/* <img 
        src={plan.images[0]} 
        alt="" 
        className='w-20 rounded ml-4' /> */}
        {/* {plan.images.map(img => (
          <img 
            key={img}
            alt=''
            src={img} 
            className='w-20 rounded ml-4'   
          />
        ))} */}
    </Link>
  )
}

export default PlanLink