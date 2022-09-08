import PlanLink from './PlanLink'

function SavedPlans({plans}) {
  return (
    <div className="bg-gray-100 rounded-md p-4 mt-2 md:max-w-[500px]">
      <h2 className='text-lg items-center font-semibold mb-2'>
        Saved Plans
      </h2>
      <div className='space-y-2'>
        {plans.map((plan) => (
          <PlanLink key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  )
}

export default SavedPlans