import {AiOutlinePlusCircle} from 'react-icons/ai'
import CurrentPlanImage from './CurrentPlanImage'

function CurrentPlan({currentPlan, handleRemoveImage}) {
  return (
    <div className="bg-gray-100 p-4 rounded-md min-h-[116px]">
      {
        !currentPlan.length ? (
          <>
            <h2 className='text-lg font-semibold mb-2'>
              Discover shows that fit your child's needs
            </h2>
            <p className="max-w-md">Select the learning goals that you want your child to focus on and we'll match you with shows with the same focus.</p>
          </>
        ) : (
          <div>
            <h2 className='text-lg items-center flex font-semibold mb-2'>
              Current Plan
              <AiOutlinePlusCircle className="text-xl ml-2" />
            </h2>
            <div className="flex flex-wrap">
              {currentPlan.map(s => 
                <CurrentPlanImage 
                  key={s} 
                  image={s}
                  handleRemoveImage={handleRemoveImage} 
                />
              )}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CurrentPlan