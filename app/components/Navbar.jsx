import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 z-50 flex justify-end w-full px-3 py-2 lg:px-4'>
      <Link to="/info" title="Info">
        <BsInfoCircle className='text-lg text-gray-400 hover:text-gray-600 lg:text-2xl' />
      </Link>
    </div>
  )
}

export default Navbar