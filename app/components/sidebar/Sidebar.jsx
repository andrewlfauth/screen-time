import ShowsTab from './ShowsTab'
import FavoritesTab from './FavoritesTab'
import LogoutTab from './LogoutTab'
import {useState} from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'

function Sidebar() {
  const [expand, setExpand] = useState(false)

  return (
    <div className={`${expand ? "z-10 w-[200px] px-2 lg:px-2" : "px-1"} bg-gray-100 py-2 rounded-md fixed z-10 lg:w-[200px] duration-300 space-y-2`}>
      <ShowsTab expand={expand} />
      <FavoritesTab expand={expand} />
      <div
        className='lg:hidden bg-white rounded-md p-4 shadow cursor-pointer group'
        onClick={() => setExpand(!expand)}
      >
        <AiOutlineDoubleRight 
          className={`${expand ? "translate-x-16 rotate-180 duration-300" : 'duration-200'} text-3xl mx-auto group-hover:scale-110`} 
        />
      </div>
      <LogoutTab expand={expand} />
    </div>  
  )
}

export default Sidebar