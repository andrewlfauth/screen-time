import CurrentPlanImage from './CurrentPlanImage'
import {useState, useRef, useEffect} from 'react'
import {Form} from '@remix-run/react'
import Flash from '~/components/Flash'
import NamePlanForm from './NamePlanForm'

function CurrentPlan({currentPlan, handleRemoveImage, action, clearPlan}) {
  const [done, setDone] = useState(false)
  const inputRef = useRef()

useEffect(() => {
  if (action?.success) {
    clearPlan()
    setDone(false)
  }
}, [action])

  return (
    <div className="bg-gray-100 p-4 rounded-md min-h-[125px]">
      <h2 className='text-lg items-end flex font-semibold mb-2'>
        Create Plan
        {currentPlan.length ? (
        <>
            <button 
            onClick={() => setDone(true)}
            className='font-semibold text-sm px-4 py-1 text-white bg-emerald-500 text-center ml-4 mr-2 rounded-full shadow'
          >
            Done
          </button>
          <button 
            onClick={clearPlan}
            className='font-semibold text-sm py-1 rounded-full shadow px-4 text-center bg-gray-50 text-neutral-500'
          >
            Clear
          </button>
        </>
        ) : ""}

        {action?.error && (
          <Flash duration={5000}>
            <span className='text-base ml-1 text-red-500'
            >{"- "}{action.error}</span>
          </Flash>
        )}
        {action?.success && (
          <Flash duration={5000}>
            <span className='text-base ml-1 text-emerald-500'
            >{"- "}Success!</span>
          </Flash>
        )}
      </h2>
      {
        !currentPlan.length ? (
          <p className="max-w-md">Select the learning goals that you want your child to focus on and we'll match you with shows with the same focus.</p>
        ) : (
          <div>
            <div className="flex flex-wrap items-center">
              {currentPlan.map(s => 
                <CurrentPlanImage 
                  key={s} 
                  image={s}
                  handleRemoveImage={handleRemoveImage} 
                />
              )}
            {
              done ? (
                <NamePlanForm 
                  currentPlan={currentPlan}
                  goBack={() => setDone(false)}
                  ref={inputRef}
                />
              ) : ""
            }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CurrentPlan