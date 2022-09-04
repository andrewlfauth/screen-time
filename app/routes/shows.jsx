import ShowCard from "../components/ShowCard"
import shows from '~/shows.json'
import {getUser, handleLike} from '~/services/users.server'
import { useLoaderData } from "@remix-run/react"

export async function action({request}) {
  return handleLike(request)
}

export async function loader({request}) {
  const user = getUser(request)
  return user ? user : null
}

function Index() {
  const user = useLoaderData()

  return (
    <div className="bg-blue-100 py-32">
      {user?.username}
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="md:grid space-y-4 md:space-y-0 flex items-center flex-col grid-cols-2 lg:grid-cols-3 gap-10">
          {shows.map(show => <ShowCard key={show.title} show={show} user={user} />)}
        </div>
      </div>
    </div>
  )
}

export default Index