import { Link } from '@remix-run/react'
import ShowsTab from './ShowsTab'

function Sidebar() {

  return (
    <div className='bg-gray-200 w-1/6 h-screen py-4 px-2 rounded-md shadow flex-none min-w-[200px] w-[200px]'>
      <ShowsTab />
    </div>  
  )
}

export default Sidebar