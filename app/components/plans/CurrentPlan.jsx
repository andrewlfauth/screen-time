import CurrentPlanImage from './CurrentPlanImage'
import {useState, useRef, useEffect} from 'react'
import Flash from '~/components/Flash'
import NamePlanForm from './NamePlanForm'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function CurrentPlan({currentPlan, handleRemoveImage, action, clearPlan}) {
  const [done, setDone] = useState(false)
  const inputRef = useRef()
  const handleClearPlan = () => {
    clearPlan()
    setDone(false)
  }

  useEffect(() => {
    if (action?.success) {
      clearPlan()
      setDone(false)
    }
  }, [action])

  return (
    <div className="p-2 rounded-md border shadow-inner">
      <div className='mb-2'>
        <button 
          onClick={() => setDone(true)}
          className='px-4 py-1 mr-2 text-sm font-semibold text-center text-white bg-blue-900 rounded-full shadow'
        >
          Done
        </button>
        <button 
          onClick={handleClearPlan}
          className='px-4 py-1 text-sm font-semibold text-center rounded-full shadow bg-blue-50 text-neutral-500'
        >
          Clear
        </button>
      </div>

      {action?.error && (
        <Flash duration={5000}>
          <span className='ml-1 font-semibold text-red-500'
          >{"- "}{action.error}</span>
        </Flash>
      )}
      {action?.success && (
        <Flash duration={5000}>
          <span className='ml-1 font-semibold text-blue-900'
          >{"- "}Success!</span>
        </Flash>
      )}

      <div className='flex flex-col'>
        <div className="flex flex-wrap items-center -ml-1">
          {currentPlan.map(s => 
            <CurrentPlanImage 
              key={s} 
              image={s}
              handleRemoveImage={handleRemoveImage} 
            />
          )}
        </div>   
        {done ? (
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

export default CurrentPlan