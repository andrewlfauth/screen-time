import { getUser } from '~/services/users.server'
import { useLoaderData, Outlet } from '@remix-run/react'
import { atom, useAtom } from 'jotai'
import { redirect } from '@remix-run/node'
import Header from '~/components/dashboard/Header'

export const userAtom = atom('')

export async function loader({ request }) {
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
    <div className='flex py-6'>
      <div className='flex-1'>
        <Header />
        <div className='flex justify-center lg:justify-start'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index
