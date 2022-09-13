import CurrentPlan from './CurrentPlan'
import LearningGoalsSelect from './LearningGoalsSelect'
import LearningGoalsDisplay from './LearningGoalsDisplay'

function Hero({action, currentPlan, clearPlan, removeImage, focusOptions, onChange, focus, onClick}) {
  return (
    <div className='flex justify-between w-full px-4 py-6 bg-white rounded-md shadow sm:pt-8 sm:pb-4'>
      <div className='max-w-sm'>
        <h2 className='text-2xl font-semibold tracking-tighter sm:text-4xl mb-2'>
        Start a new plan
        </h2>
        <p className='max-w-xs text-sm tracking-tight text-gray-600 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque blanditiis.</p>
      
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
          />
          <LearningGoalsDisplay 
            focus={focus}
            onClick={onClick}
            currentPlan={currentPlan}
          />
        </div>
      </div>
        <div className='select-none hidden sm:block'>
          <img src="https://res.cloudinary.com/dpnkrz8c8/image/upload/w_200/v1663024120/Screen%20Time/image_49_imj1iq.png" alt="fox" />
        </div>
    </div>
  )
}

export default Hero