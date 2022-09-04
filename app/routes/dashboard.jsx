import {getUser} from '~/services/users.server'
import { useLoaderData, useLocation, Outlet } from '@remix-run/react'
import Sidebar from '~/components/sidebar/Sidebar'
import {atom, useAtom} from 'jotai'
import { redirect } from '@remix-run/node'

export const userAtom = atom("")

export async function loader({request}) {
  const user = await getUser(request)
  return user ? user : redirect('/')
}

function Index() {
  const user = useLoaderData()
  const pathArray = useLocation().pathname.split('/')
  const [userContext, setUserContext] = useAtom(userAtom)

  if (!userContext) {
    setUserContext(user)
  }

  return (
    <div className='py-20'>
      <header className='pl-2 pb-2'>
        <h1 className='text-2xl flex font-bold'>
          {user.username}
        <span className="text-center text-4xl font-semibold mx-auto">
          {
            pathArray[pathArray.length - 1][0].toUpperCase() + 
            pathArray[pathArray.length - 1].substring(1)
          }
        </span>
        </h1>
      </header>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 ml-[75px] lg:ml-[200px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index