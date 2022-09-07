import PlanLink from './PlanLink'

function SavedPlans({plans}) {
  return (
    <div>
      <h2 className='text-lg items-center font-semibold mb-2'>
        Saved Plans
      </h2>
      {plans.map((plan) => (
        <PlanLink key={plan.name} plan={plan} />
       ))}
    </div>
  )
}

export default SavedPlans