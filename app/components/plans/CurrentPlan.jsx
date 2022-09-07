import CurrentPlanImage from './CurrentPlanImage'
import {useState, useRef, useEffect} from 'react'
import {Form} from '@remix-run/react'
import Flash from '~/components/Flash'

function CurrentPlan({currentPlan, handleRemoveImage, action, clearPlan}) {
  const [done, setDone] = useState(false)
  const inputRef = useRef()

useEffect(() => {
  if (action?.success) {
    clearPlan()
  }
}, [action])

  return (
    <div className="bg-gray-100 p-4 rounded-md min-h-[125px]">
      <h2 className='text-lg items-center flex font-semibold mb-2'>
        Create Plan
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
                <Form method="post" className='flex max-h-[116px]'>
                  <div className='flex shadow border flex-col px-4 rounded bg-white'>
                    <input type="hidden" name="plan" value={currentPlan} />
                    <label 
                      htmlFor="planName"
                      className='font-semibold text-sm'
                    >
                        Name your plan
                      </label>
                    <input 
                      ref={inputRef}
                      type="text" name="planName" required
                      placeholder='e.g. "Manners & Curiosity"' 
                      className='outline-none'
                    />
                  </div>
                  <div className='space-x-2 ml-2'>
                    <button 
                      type="submit"
                      className='h-full px-4 rounded font-semibold bg-emerald-500'
                    >
                      Save
                    </button>
                    <button
                      className='bg-gray-200 h-full font-semibold px-4 rounded'
                      onClick={() => setDone(false)}
                    >
                      Back
                    </button>
                  </div>
                </Form>
              ) : (
                <div className='space-x-2 ml-2'>
                  <button 
                    onClick={() => setDone(true)}
                    className='border border-gray-400 bg-white font-semibold rounded w-20 h-[45px]'
                  >
                    Done
                  </button>
                  <button 
                    onClick={clearPlan}
                    className='border border-gray-400 bg-gray-200 font-semibold rounded w-20 h-[45px]'
                  >
                    Clear
                  </button>
                </div>
              )
            }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CurrentPlan