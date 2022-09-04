import {handleLike} from '~/services/users.server'
import FeaturedFocus from "~/components/dashboard/FeaturedFocus"
import FilterShows from "~/components/dashboard/FilterShows"

export async function action({request}) {
  return handleLike(request)
}

function Index() {
  return (
    <div className="px-2">
      <FilterShows />
        {/* <FeaturedFocus /> */}
        
    </div>
  )
}

export default Index