import {getUser} from '~/services/users.server'
import { useLoaderData, useLocation, Outlet, Link } from '@remix-run/react'
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
  const pathArr = useLocation().pathname.split('/').filter(p => p)
  const [userContext, setUserContext] = useAtom(userAtom)

  if (!userContext) {
    setUserContext(user)
  }

  return (
    <div className='py-6'>
      <header className='pb-6'>
        <h1 className="text-center select-none text-4xl font-semibold mx-auto">
          {pathArr.map((s,i) => (
            i === pathArr.length - 1 ? 
              <span className='text-emerald-700'>{s.replaceAll('%20', " ")}</span> :
              <>
                <Link
                  to={i === 0 ? '/dashboard' : `/dashboard/${s}`} 
                  className='text-3xl text-gray-500 hover:border-b-2 border-gray-500'
                >
                  {s}
                </Link> 
                <span className='text-purple-900'>{' > '}</span>
              </>
          ))}
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