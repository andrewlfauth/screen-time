import {useAtom} from 'jotai'
import {userAtom} from '~/routes/dashboard'
import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'

function FavoriteShows() {
  const [user] = useAtom(userAtom)
  const favoriteShows = shows.filter(s => user.likes.includes(s.title))

  return (
    <div className='p-4 bg-gray-100 rounded-md w-fit sm:w-auto max-w-[600px]'>
      <h2 className='text-lg font-semibold'>Your Favorites</h2>
      <div className='grid gap-2 sm:grid-cols-2 mt-4'>
        {favoriteShows.map(s => <ShowCard key={s.title} show={s} />)}
      </div>
    </div>
  )
}

export default FavoriteShows