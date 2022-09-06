import FavoriteShows from "../../components/dashboard/FavoriteShows"
import {getUser} from "../../services/users.server"
import {useLoaderData} from '@remix-run/react'


export async function loader({request}) {
  const user = await getUser(request)
  return user.likes
}

function Index() {
  const likes = useLoaderData()

  return (
    <div className="px-2">
      <FavoriteShows likes={likes} />
    </div>
  )
}

export default Index