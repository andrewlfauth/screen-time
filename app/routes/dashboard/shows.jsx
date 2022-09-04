import ShowCard from "~/components/ShowCard"
import {getUser, handleLike} from '~/services/users.server'
import { useLoaderData } from "@remix-run/react"
import FeaturedFocus from "~/components/dashboard/FeaturedFocus"
import DisplayShows from "~/components/dashboard/DisplayShows"

export async function action({request}) {
  return handleLike(request)
}

// export async function loader({request}) {
//   const user = getUser(request)
//   return user ? user : null
// }

function Index() {
  // const user = useLoaderData()

  return (
    <div className="px-2">
      <DisplayShows />
       {/* <div className="md:grid space-y-4 md:space-y-0 flex items-center flex-col grid-cols-2 lg:grid-cols-3 gap-10">
          {shows.map(show => <ShowCard key={show.title} show={show} user={user} />)}
        </div> */}
        {/* <FeaturedFocus /> */}
        
    </div>
  )
}

export default Index