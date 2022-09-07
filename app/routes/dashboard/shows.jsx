import ShowsFilter from "~/components/dashboard/ShowsFilter"
import FeaturedShow from '~/components/dashboard/FeaturedShow'
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
    <div className="px-2 flex flex-col lg:space-x-4 items-start justify-between">
      
      <ShowsFilter />
      {/* <FeaturedShow /> */}
    </div>
  )
}

export default Index