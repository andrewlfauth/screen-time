import FilterShows from "~/components/dashboard/FilterShows"
import FeaturedShow from '~/components/dashboard/FeaturedShow'
import {handleLike} from '~/services/users.server'

export async function action({request}) {
  return handleLike(request)
}


function Index() {
  return (
    <div className="px-2 flex flex-col lg:space-x-4 items-start justify-between">
      <FilterShows />
      {/* <FeaturedShow /> */}
    </div>
  )
}

export default Index