import {getUser} from '~/services/users.server'
import { useLoaderData, Outlet} from '@remix-run/react'
import {atom, useAtom} from 'jotai'
import { redirect } from '@remix-run/node'
import Header from '~/components/dashboard/Header'
import FeaturedShow from '~/components/dashboard/FeaturedShow'

export const userAtom = atom("")

export async function loader({request}) {
  const user = await getUser(request)
  return user ? user : redirect('/')
}

function Index() {
  const user = useLoaderData()
  const [userContext, setUserContext] = useAtom(userAtom)

  if (!userContext) {
    setUserContext(user)
  }

  return (
    <div className='py-6 flex'>
      <div className='flex-1 ml-[75px] lg:ml-[203px]'>
        <Header />
        <Outlet />
        <FeaturedShow />
      </div>
    </div>
  )
}

export default Index