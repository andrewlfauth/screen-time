import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'
import {FaRegHeart, FaHeart, FaBaby} from 'react-icons/fa'
import {useState} from 'react'
import {BiInfoCircle} from 'react-icons/bi'

function Favorited({likes}) {
  const favoriteShows = shows.filter(s => likes.includes(s.title))
  const [clicked, setClicked] = useState(false)

  return (
    <div className='w-full px-4 py-6 bg-white rounded-md shadow sm:pt-8 sm:pb-4 lg:w-fit'>
      <div className='flex justify between'>
        <div className='max-w-md'>
          <h1 className='mb-2 text-2xl font-semibold tracking-tighter sm:text-4xl'>
            Keep track of the shows that make an impact
          </h1>
          <p className='max-w-xs items-center mb-6 text-sm tracking-tight text-gray-600'>
            <span>
              When you discover a show that resonates with your chid click the 
            </span>
            <span>
              <FaRegHeart className='ml-2 inline' />
            </span>
            <span>
              {" "}to save it here
            </span>
          </p>
          <div className='h-8 rounded-b-md bg-blue-900 flex items-center justify-between text-white w-[200px] mt-8 px-2 relative'>
            <BiInfoCircle className='text-2xl' />
            <div className='flex items-center'>
              <FaBaby />
              <span className='font-semibold ml-1'>1, 2, 3</span>  
            </div>
            <div onClick={() => setClicked(!clicked)}>
              {clicked ? 
                <FaHeart className='text-2xl text-pink-300 cursor-pointer' />
              :
                <FaRegHeart className='text-2xl cursor-pointer'/>
              }
            </div>
          <div className='w-11 h-11 border-2 border-red-400 absolute -right-[2px] pointer-events-none'></div>
        </div>
      </div>
        <div>
          <img 
            src="https://res.cloudinary.com/dpnkrz8c8/image/upload/w_175/v1663014376/Screen%20Time/Group_3_1_gfvodo.png" 
            alt="dancing deer" 
          />
        </div>
      </div>
      {likes.length ? (
        <div className='grid gap-2 mt-4 sm:grid-cols-2 border-t pt-4'>
          {favoriteShows.map(s => 
            <ShowCard key={s.title} show={s} />
          )}
        </div>
      ) : ""}
    </div>
  )
}

export default Favorited