import ShowsTab from './ShowsTab'
import FavoritesTab from './FavoritesTab'
import LogoutTab from './LogoutTab'
import PlansTab from './PlansTab'
import {useEffect, useState} from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import {useTransition} from '@remix-run/react'

function Sidebar() {
  const [expand, setExpand] = useState(false)
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'loading') setExpand(false)
  }, [transition.state])

  return (
    <div className={`${expand ? "z-10 w-[200px] px-2 lg:px-2" : "px-1"} bg-gray-100 py-2 rounded-md fixed z-10 lg:w-[200px] duration-300 space-y-2`}>
      <PlansTab expand={expand} />
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