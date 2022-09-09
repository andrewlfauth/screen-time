import PlanLink from "./PlanLink"

function FeaturedPlans({plans}) {
  return (
    <div className="bg-gray-100 rounded-md p-4 mt-2 md:min-w-[500px]">
      <h2 className="text-lg font-semibold mb-2">
        Featured Plans
      </h2>
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