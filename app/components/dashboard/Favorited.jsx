import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'
import {FaRegHeart, FaHeart, FaBaby} from 'react-icons/fa'
import {useState, useRef} from 'react'
import {BiInfoCircle} from 'react-icons/bi'
import {useFetchers} from '@remix-run/react'

function Favorited({likes}) {
  const fetchers = useFetchers()
  let favoriteShows = shows.filter(s => likes.includes(s.title))
  const [clicked, setClicked] = useState(false)
  const unliked = useRef([])

  for (const f of fetchers) {
    if (f.submission && f.state === "submitting") {
      let unlikedShow = f.submission?.formData?.get("show")
      unliked.current = [...unliked.current, unlikedShow]
    }
  }

  return (
    <div className='w-full px-4 py-6 bg-white rounded-md shadow sm:pt-8 sm:pb-4 md:w-fit'>
      <div className='flex justify between'>
        <div className='max-w-md'>
          <h1 className='mb-2 text-2xl font-semibold tracking-tighter sm:text-4xl'>
            Keep track of the shows that make an impact
          </h1>
          <p className='items-center max-w-xs mb-6 text-sm tracking-tight text-gray-600'>
            <span>
              When you discover a show that resonates with your chid click the 
            </span>
            <span>
              <FaRegHeart className='ml-[5px] inline' />
            </span>
            <span>
              {" "}to save it here
            </span>
          </p>
          <div className='h-8 rounded-b-md bg-blue-900 flex items-center justify-between text-white w-[200px] mt-8 px-2 relative'>
            <BiInfoCircle className='text-2xl' />
            <div className='flex items-center'>
              <FaBaby />
              <span className='ml-1 font-semibold'>1, 2, 3</span>  
            </div>
            <div onClick={() => setClicked(!clicked)}>
              {clicked ? 
                <FaHeart className='text-2xl text-pink-300 cursor-pointer' />
              :
                <FaRegHeart className='text-2xl cursor-pointer'/>
              }
            </div>
          <div className='w-11 h-9 border-2 border-red-400 absolute -right-[2px] pointer-events-none'></div>
        </div>
      </div>
        <div className='items-end hidden select-none sm:flex'>
          <img 
            src="https://res.cloudinary.com/dpnkrz8c8/image/upload/w_180/v1663361694/Screen%20Time/card_7_ohj31q.png" 
            alt="koala" 
          />
        </div>
      </div>
      {likes.length ? (
        <div className='grid gap-2 pt-4 mt-4 border-t sm:grid-cols-2'>
          {favoriteShows
            .filter(f => !unliked.current.includes(f.title))
            .map(s => <ShowCard key={s.title} show={s} />
          )}
        </div>
      ) : ""}
    </div>
  )
}

export default Favorited