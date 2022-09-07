import CurrentPlanImage from './CurrentPlanImage'
import {useState} from 'react'
import {Form} from '@remix-run/react'

function CurrentPlan({currentPlan, handleRemoveImage}) {
  const [done, setDone] = useState(false)

  return (
    <div className="bg-gray-100 p-4 rounded-md min-h-[116px]">
      <h2 className='text-lg items-center font-semibold mb-2'>
        Create Plan
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
                      type="text" name="planName"
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
              <button 
                onClick={() => setDone(true)}
                className='border-2 border-gray-400 bg-white font-semibold rounded w-20 h-[45px]'
              >
                Done
              </button>
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