import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {useState} from 'react'

function FavoriteShows({likes}) {
  const favoriteShows = shows.filter(s => likes.includes(s.title))
  const [fillHeart, setFillHeart] = useState(false)

  return (
    <div className='p-4 bg-gray-100 rounded-md w-full md:w-fit sm:w-auto max-w-[600px]'>
      <h2 className='text-lg font-semibold select-none'>
        {likes.length ? 
          "Your Favorites" : 
          `Currently no favorites ${fillHeart ? '😸' : '😿'}`
        }
      </h2>
      {
        likes.length ? (
          <div className='grid gap-2 mt-4 sm:grid-cols-2'>
            {favoriteShows.map(s => 
              <ShowCard key={s.title} show={s} />
            )}
          </div>
        ) : (
          <div className='flex mt-4'>
            <div>
              <p className='w-[250px] select-none'>
                To save a show to favorites click underneath the show's image.
              </p>
            </div>
            <div onClick={() => setFillHeart(!fillHeart)} className="ml-4">
              {fillHeart ? 
                <FaHeart className='-ml-4 text-2xl text-gray-900 cursor-pointer' />
                :
                <FaRegHeart className='-ml-4 text-2xl text-gray-900 cursor-pointer' />
              }
            </div>
          </div>
        )}
    </div>
  )
}

export default FavoriteShows