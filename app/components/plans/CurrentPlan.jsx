import CurrentPlanImage from './CurrentPlanImage'
import {useState, useRef, useEffect} from 'react'
import Flash from '~/components/Flash'
import NamePlanForm from './NamePlanForm'
import {AiOutlinePlusCircle} from 'react-icons/ai'

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
    <div>
      <h2 className='flex items-end mb-2 text-lg font-semibold'>
      🆕 Create Plan
        {currentPlan.length ? (
        <>
            <button 
            onClick={() => setDone(true)}
            className='px-4 py-1 ml-4 mr-2 text-sm font-semibold text-center text-white bg-blue-900 rounded-full shadow'
          >
            Done
          </button>
          <button 
            onClick={clearPlan}
            className='px-4 py-1 text-sm font-semibold text-center rounded-full shadow bg-blue-50 text-neutral-500'
          >
            Clear
          </button>
        </>
        ) : ""}

        {action?.error && (
          <Flash duration={5000}>
            <span className='ml-1 text-base text-red-500'
            >{"- "}{action.error}</span>
          </Flash>
        )}
        {action?.success && (
          <Flash duration={5000}>
            <span className='ml-1 text-base text-blue-900'
            >{"- "}Success!</span>
          </Flash>
        )}

      </h2>
      <div>

      {
        !currentPlan.length ? (
          <p className="max-w-md text-xs">
            Discover the shows that fit your child's needs.<br/>
            <span className='flex items-end'>
              To add a show click
              <AiOutlinePlusCircle className='ml-1 text-lg' />
            </span>
          </p>
        ) : (
          <div className='flex flex-col'>
          <div className="flex flex-wrap items-center">
              {currentPlan.map(s => 
                <CurrentPlanImage 
                  key={s} 
                  image={s}
                  handleRemoveImage={handleRemoveImage} 
                />
              )}
           </div>
           
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
          )}
        </div>
    </div>
  )
}

export default CurrentPlan