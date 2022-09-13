import { useState } from 'react'
import {FaBaby} from 'react-icons/fa'
import LikeButton from './LikeButton'
import AddButton from './AddButton'
import ShowInfo from './ShowInfo'
import {BiInfoCircle} from 'react-icons/bi'


function ShowCard({show, action = "like", onClick, added}) {
  const [showInfo, setShowInfo] = useState(false)
  
  return (
    <div className="flex flex-col shadow rounded-t-md max-w-[300px] md:w-auto">
      <div className='relative max-w-sm'>
        <ShowInfo toggle={showInfo} show={show} />
        <img src={show.image} alt={show.title} className='w-full aspect-auto rounded-t-md' />
      </div>

      <div className="bg-blue-900 flex items-center justify-between rounded-b-md shadow px-2 py-1">
        <button
          className='relative group' 
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-100 delay-200 scale-50 -top-12 bg-white text-center text-black font-bold py-1 w-24 rounded-full -left-2 shadow text-sm pointer-events-none">
            <div className="w-2 h-2 bg-white absolute left-4 rotate-45 -bottom-[4px]"></div>
              {showInfo ? "Close" : "Info"}
          </div>
          <BiInfoCircle className="text-white text-2xl" />
        </button>

        <h3 
          className='text-white relative flex group items-center cursor-help font-semibold tracking-tight'
        >
            <div className="absolute shadow scale-50 -top-12 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-100 delay-200 bg-white text-center text-black font-bold py-1 w-24 rounded-full -left-3 text-sm pointer-events-none">
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
