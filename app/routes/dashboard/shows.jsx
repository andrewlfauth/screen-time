import ShowSearch from '~/components/dashboard/ShowSearch'
import {handleLike, getUser} from '../../services/users.server'
import {useLoaderData} from '@remix-run/react'
import { userAtom } from "../dashboard"
import {useAtom} from 'jotai'

export async function action({request}) {
  await handleLike(request)
  return null
}

export async function loader({request}) {
  const user = await getUser(request)
  return user
}

function Index() {
  const userData = useLoaderData()
  const [, setUser] = useAtom(userAtom)
  setUser(userData)

  return (
    <div className="p-4 bg-blue-50">
      <ShowSearch />        
    </div>
  )
}

export default Index