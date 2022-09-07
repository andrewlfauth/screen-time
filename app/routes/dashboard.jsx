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
        <h1 className="text-center flex justify-center items-center select-none text-3xl font-semibold">
          {pathArr.map((s,i) => (
            i === pathArr.length - 1 ? 
              <span key={i} className='text-emerald-700 text-4xl'>{s.replaceAll('%20', " ")}</span> :
              <div key={i} className="flex">
                <Link
                  to={i === 0 ? '/dashboard' : `/dashboard/${s}`} 
                  className='text-gray-500 hover:underline'
                >
                  {s}
                </Link> 
                <span className='text-purple-900 mx-[5px]'>{`>`}</span>
              </div>
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