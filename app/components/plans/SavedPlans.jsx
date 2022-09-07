
function SavedPlans({plans}) {
  return (
    <div>
      <h2 className='text-lg items-center font-semibold mb-2'>
        Saved Plans
      </h2>
      {plans.map((plan, i) => (
        <h3 key={i}>{plan.name}</h3>
       ))}
    </div>
  )
}

export default SavedPlans