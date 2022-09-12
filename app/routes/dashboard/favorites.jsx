import Favorited from "../../components/dashboard/Favorited"
import {getUser} from "../../services/users.server"
import {useLoaderData} from '@remix-run/react'


export async function loader({request}) {
  const user = await getUser(request)
  return user.likes
}

function Index() {
  const likes = useLoaderData()

  return (
    <div className="p-4 bg-blue-50">
      <Favorited likes={likes} />
    </div>
  )
}

export default Index