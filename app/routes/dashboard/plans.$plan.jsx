import {getUser} from '~/services/users.server'
import { useLoaderData } from '@remix-run/react'

export async function loader({request, params}) {
  const planName = await params.plan
  const user = await getUser(request)
  const plan = user.plans.find(p => p.name === planName)
  return plan
}

function Index() {
  const plan = useLoaderData()
  
  return (
    <div className="px-2">
      <div className="bg-gray-100 rounded-md p-4 mt-2 md:max-w-[500px]">
        <h2></h2>
      </div>
    </div>
  )
}

export default Index