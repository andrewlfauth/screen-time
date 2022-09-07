import {getUser, deletePlan} from '~/services/users.server'
import { useLoaderData} from '@remix-run/react'
import ShowCard from '~/components/ShowCard'
// import shows from '~/shows.json'
import {BsTrashFill} from 'react-icons/bs'
import { useState } from 'react'
import DeletePlanWarning from '~/components/plans/DeletePlanWarning'
import { getPlan } from '~/services/users.server'

export async function action({request, params}) {
  return deletePlan(request, params)
}

export async function loader({request, params}) {
  return getPlan(request, params)
}

function Index() {
  const plan = useLoaderData()
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <div className="px-2">
      <div className="bg-gray-100 rounded-md p-4 mt-2 lg:w-fit">
        <div className='flex justify-between relative'>
          <h2 className='font-semibold text-lg'>{plan.name}</h2>
          <button 
            className='rounded bg-neutral-250 hover:bg-white shadow p-2'
            onClick={() => setConfirmDelete(true)}
          >
            <BsTrashFill className='text-neutral-500 text-xl' />
          </button>
          {confirmDelete && 
            <DeletePlanWarning 
              planName={plan.name}
              show={confirmDelete} 
              cancel={() => setConfirmDelete(false)}
            />
          }
        </div>
        <div className='grid gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 w-fit '>
          {
            plan.show.map(s => <ShowCard action="like" key={s.title} show={s} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Index