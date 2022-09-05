import { RiArrowUpDownFill } from 'react-icons/ri'
import { useState } from 'react'
import {FaBaby} from 'react-icons/fa'
import LikeButton from './LikeButton' 

function ShowCard({show, likeButton = true}) {
  const [showFocus, setShowFocus] = useState(false)
  
  return (
    <div className="flex flex-col shadow rounded-t-md max-w-[300px] md:w-auto">
      <div className='relative max-w-sm'>
        {showFocus && 
          <div className="h-full realtive w-full text-white text-center text-xl font-bold bg-purple-900 bg-opacity-80 py-2 absolute rounded-t-md">
            {show.focus.map(f => <h2 key={f}>{f}</h2> )}
          </div>
        }
        <img src={show.image} alt={show.title} className='w-full aspect-auto rounded-t-md' />
      </div>

      <div className="bg-gray-800 flex items-center justify-between rounded-b-md shadow px-2 py-1">
        <button
          className='relative group' 
          onClick={() => setShowFocus(!showFocus)}
        >
          <div className="absolute opacity-0 -top-12 group-hover:opacity-100 bg-white text-center text-black font-bold py-1 w-24 rounded-full -left-2 text-sm">
            <div className="w-2 h-2 bg-white absolute left-4 rotate-45 -bottom-[4px]"></div>
              Focus
          </div>
          <RiArrowUpDownFill 
            className="text-white text-2xl" 
          />
        </button>

        <h3 
          className='text-white relative flex group items-center cursor-help font-semibold tracking-tight'
        >
            <div className="absolute opacity-0 -top-12 group-hover:opacity-100 bg-white text-center text-black font-bold py-1 w-24 rounded-full -left-3 text-sm">
              <div className="w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]"></div>
              Ages
            </div>
            <FaBaby className="mr-1 text-lg" />
          {show.ages.join(', ')}  
        </h3>
        
        {likeButton && <LikeButton show={show.title} />}
        
      </div>
      
    </div>
  )
}

export default ShowCard;
