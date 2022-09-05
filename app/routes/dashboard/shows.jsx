import {handleLike} from '~/services/users.server'
import FilterShows from "~/components/dashboard/FilterShows"
import FeaturedShow from '~/components/dashboard/FeaturedShow'

export async function action({request}) {
  return handleLike(request)
}

function Index() {
  return (
    <div className="px-2">
      <FilterShows />
      <FeaturedShow />
    </div>
  )
}

export default Index