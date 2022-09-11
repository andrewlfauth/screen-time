import PlanLink from "./PlanLink"

function FeaturedPlans({plans}) {
  return (
    <div className="p-4 bg-white rounded-md shadow w-fit">
      <h2 className="mb-2 text-lg font-semibold">
        📰 Featured Plans
      </h2>
      <p className='max-w-xs mb-2 text-sm tracking-tight text-gray-600'>These plans were created by other parents</p>
      <div className="space-y-2">
        {plans.map(plan => 
          <PlanLink 
            key={plan} 
            plan={plan.plan} 
            creator={plan.username} 
          />
        )}
      </div>
    </div>
  )
}

export default FeaturedPlans