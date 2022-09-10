import {Link} from '@remix-run/react'
import {useEffect, useState, useRef} from 'react'
import {RiUser3Fill} from 'react-icons/ri'

function PlanLink({plan, creator}) {
  const [srcIdx, setSrcIdx] = useState(0)
  const timerRef = useRef()

  let colorOptions = [
    'text-blue-600',
    'text-purple-600',
    'text-orange-600',
    'text-green-600',
    'text-pink-600',
    'text-sky-600',
  ]
 
  let color = useRef(colorOptions[Math.floor(Math.random() * colorOptions.length)])
  
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setSrcIdx((srcIdx + 1) % plan.images.length)
    }, 3000) 

    return () => clearTimeout(timerRef.current)
  }, [plan.images.length, srcIdx])

  return (
    <Link
      to={creator ? `/dashboard/plans/${creator}/${plan.name}` : `/dashboard/plans/${plan.name}`}
      className="flex p-4 space-x-4 bg-white border-2 border-white rounded-md shadow w-fit hover:border-emerald-500"
    >
      <div>
        <span className='text-lg font-semibold'>{plan.name}</span>
        {creator && (
          <>
            <span className='relative flex top-3'>
              <RiUser3Fill className={`text-sm ${color.current}`} />
              <span 
                className={`text-xs ml-[3px] font-semibold ${color.current}`}
              >
                {creator}
              </span>
            </span>
          </>
        )}
      </div>

      <div className='relative w-20 h-12 rounded'>
        {plan.images.map((img, idx) => {
          return (
            <img 
            key={idx}
            src={plan.images[idx]} 
            alt="" 
            className={`${idx == srcIdx ? "opacity-100 scale-100" : "opacity-0 scale-95"} rounded ml-4 duration-500 absolute -left-4 w-20`} />
          )
        })}
      </div>
    </Link>
  )
}

export default PlanLink