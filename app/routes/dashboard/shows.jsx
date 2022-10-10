import ShowSearch from '~/components/dashboard/ShowSearch'
import { handleLike } from '../../services/users.server'
import { useMatches } from '@remix-run/react'
import { userAtom } from '../dashboard'
import { useAtom } from 'jotai'

export async function action({ request }) {
  await handleLike(request)
  return null
}

function Index() {
  const matches = useMatches()
  const user = matches.find((m) => m.pathname === '/dashboard').data
  const [, setUser] = useAtom(userAtom)

  setUser(user)

  return (
    <div>
      <ShowSearch />
    </div>
  )
}

export default Index
