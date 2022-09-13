import CurrentPlan from './CurrentPlan'
import LearningGoalsSelect from './LearningGoalsSelect'
import LearningGoalsDisplay from './LearningGoalsDisplay'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Flash from '../Flash'
import {useTransition} from '@remix-run/react'

function Hero({action, currentPlan, clearPlan, removeImage, focusOptions, onChange, focus, onClick, selectRef}) {
  const transition = useTransition()
  const showErrorMsg = action?.error && transition?.state !== "submitting"
  const showSuccessMsg = action?.success && transition?.state !== "submitting"
  
  return (
    <div className='flex justify-between w-full px-4 py-6 bg-white rounded-md shadow sm:pt-8 sm:pb-4'>
      <div className='max-w-sm relative'>
        <h2 className='text-2xl font-semibold tracking-tighter sm:text-4xl mb-2'>
        Start a new plan
        </h2>
        <p className='max-w-xs items-center mb-6 text-sm tracking-tight text-gray-600'>
          <span>
            Choose the topics that you want your child to learn. Click
          </span>
          <span>
            <AiOutlinePlusCircle className='ml-[5px] mb-[3px] inline' />
          </span>
          <span>
            {" "}to add a show to this plan.
          </span>
        </p>
     
        {showSuccessMsg && (
          <Flash duration={3300}>
            <div className={`absolute bg-blue-500 rounded-full  px-4 py-2 duration-500 z-10 font-semibold md:text-lg animate-wiggle text-white pointer-events-none top-8 md:top-6`}>
              Plan saved 😸
            </div>
          </Flash>
        )}
        {showErrorMsg && (
          <Flash duration={3300}>
            <div className={`absolute bg-red-500 rounded-full px-4 py-2 duration-500 z-10 font-semibold text-sm md:text-lg animate-wiggle text-white pointer-events-none top-8 md:top-6`}>
              {action.error} 😿
            </div>
          </Flash>
        )}

        <div>
          {currentPlan.length ? (
            <CurrentPlan
              action={action}
              currentPlan={currentPlan}
              clearPlan={clearPlan}
              handleRemoveImage={removeImage} 
            />
          ) : ""}
          <LearningGoalsSelect 
            options={focusOptions}
            onChange={onChange}
            ref={selectRef}
          />
          <LearningGoalsDisplay 
            focus={focus}
            onClick={onClick}
            currentPlan={currentPlan}
          />
        </div>
      </div>
        <div className='select-none hidden mt-4 sm:block'>
          <img src="https://res.cloudinary.com/dpnkrz8c8/image/upload/w_200/v1663024120/Screen%20Time/image_49_imj1iq.png" alt="fox" />
        </div>
    </div>
  )
}

export default Hero