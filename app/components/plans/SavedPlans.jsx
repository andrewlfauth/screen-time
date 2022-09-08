import PlanLink from './PlanLink'

function SavedPlans({plans}) {
  return (
    <div className="bg-gray-100 rounded-md p-4 mt-2 w-fit">
      <h2 className='text-lg font-semibold mb-2'>
        Saved Plans
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