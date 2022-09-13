import ShowsTab from './ShowsTab'
import FavoritesTab from './FavoritesTab'
import LogoutTab from './LogoutTab'
import PlansTab from './PlansTab'
import DashboardTab from './DashboardTab'
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
    <div className={`${expand ? "z-10 w-[200px] px-2" : "px-1 lg:px-2"} bg-white border-r shadow pb-2 pt-[88px] rounded-md fixed z-10 top-0 lg:w-[205px] duration-300 h-screen flex flex-col justify-between`}>
      <div className='space-y-2'>
        <DashboardTab expand={expand} />
        <PlansTab expand={expand} />
        <ShowsTab expand={expand} />
        <FavoritesTab expand={expand} />
        <div
          className='p-4 bg-white rounded-md shadow cursor-pointer lg:hidden group'
          onClick={() => setExpand(!expand)}
        >
          <AiOutlineDoubleRight 
            className={`${expand ? "translate-x-16 rotate-180 duration-300" : 'duration-200'} text-3xl mx-auto group-hover:scale-110`} 
          />
        </div>
      </div>
      <LogoutTab expand={expand} />
    </div>  
  )
}

export default Sidebar