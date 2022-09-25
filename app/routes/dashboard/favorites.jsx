import Favorited from '../../components/dashboard/Favorited'
import { useMatches } from '@remix-run/react'

function Index() {
  const likes = useMatches().find((m) => m.pathname === '/dashboard').data.likes

  return (
    <div>
      <Favorited likes={likes} />
    </div>
  )
}

export default Index
