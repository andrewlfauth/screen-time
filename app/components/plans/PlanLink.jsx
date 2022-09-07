import {Link} from '@remix-run/react'


// Dynamic param of the plan name
// Must make sure plan name is always unique
function PlanLink({plan}) {
  return (
    <Link 
      to={`/dashboard/plans/${plan.name}`}
    >
      {plan.name}
    </Link>
  )
}

export default PlanLink