import PlanLink from './PlanLink'

function SavedPlans({plans}) {
  return (
    <div className="p-4 bg-white rounded-md shadow h-fit w-fit">
      <h2 className='mb-2 text-lg font-semibold'>
       🌱 Your Plans
      </h2>
      {
        plans.length ? (
          <div className='space-y-2'>
            {plans.map((plan) => (
              <PlanLink key={plan.name} plan={plan} />
            ))}
          </div>
        ) : (
          <p>Your plans will live here 🏡</p>
        )
      }
    </div>
  )
}

export default SavedPlans