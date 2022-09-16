import { useState } from 'react'
import {FaBaby} from 'react-icons/fa'
import LikeButton from './LikeButton'
import AddButton from './AddButton'
import ShowInfo from './ShowInfo'
import {BiInfoCircle} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'


function ShowCard({show, action = "like", onClick, added}) {
  const [showInfo, setShowInfo] = useState(false)
  
  return (
    <div className="flex flex-col shadow rounded-t-md max-w-[300px] md:w-auto">
      <div className='relative max-w-sm'>
        <ShowInfo toggle={showInfo} show={show} />
        <img src={show.image} alt={show.title} className='w-full aspect-auto rounded-t-md' />
      </div>

      <div className="flex items-center justify-between px-2 py-1 bg-blue-900 shadow rounded-b-md">
        <button
          className='relative group' 
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className="absolute w-24 py-1 text-sm font-bold text-center text-black duration-100 delay-200 scale-75 bg-white rounded-full shadow opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 -top-12 -left-2">
            <div className="w-2 h-2 bg-white absolute left-4 rotate-45 -bottom-[4px]"></div>
              {showInfo ? "Close" : "Info"}
          </div>
          {showInfo ? 
            <AiOutlineCloseCircle className="text-2xl text-white" />
          :
            <BiInfoCircle className="text-2xl text-white" />
          }
        </button>

        <h3 
          className='relative flex items-center font-semibold tracking-tight text-white group cursor-help'
        >
            <div className="absolute w-24 py-1 text-sm font-bold text-center text-black duration-100 delay-200 scale-75 bg-white rounded-full shadow opacity-0 pointer-events-none -top-12 group-hover:opacity-100 group-hover:scale-100 -left-3">
              <div className="w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]"></div>
              Ages
            </div>
            <FaBaby className="mr-1 text-lg" />
          {show.ages.join(', ')}  
        </h3>
        
        {action === 'like' ? 
          <LikeButton show={show.title} />
        :
          <AddButton added={added} show={show.image} onClick={onClick} />
        }
        
      </div>
      
    </div>
  )
}

export default ShowCard;
