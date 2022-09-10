import {getPlan, deletePlan} from '~/services/plans.server'
import { useLoaderData} from '@remix-run/react'
import ShowCard from '~/components/ShowCard'
import {BsTrashFill} from 'react-icons/bs'
import { useState } from 'react'
import DeletePlanWarning from '~/components/plans/DeletePlanWarning'

export async function action({request, params}) {
  return deletePlan(request, params)
}

export async function loader({request, params}) {
  const plan = await getPlan(request, params)
  return plan
}

function Index() {
  const plan = useLoaderData()
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <div className="px-2">
      <div className="p-4 mt-2 bg-gray-100 rounded-md lg:w-fit">
        <div className='relative flex justify-between'>
          <h2 className='text-xl font-medium'>{plan.name}</h2>
          <button 
            className='p-2 rounded shadow bg-neutral-250 hover:bg-white'
            onClick={() => setConfirmDelete(true)}
          >
            <BsTrashFill className='text-xl text-neutral-500' />
          </button>
          {confirmDelete && 
            <DeletePlanWarning 
              planName={plan.name}
              show={confirmDelete} 
              cancel={() => setConfirmDelete(false)}
            />
          }
        </div>
        <div className='grid gap-4 mt-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 w-fit '>
          {
            plan.show.map(s => <ShowCard action="like" key={s.title} show={s} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Index