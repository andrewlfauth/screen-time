import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 z-50 flex justify-end w-full lg:px-4 py-2 px-3'>
      <Link to="/info" title="Info">
        <BsInfoCircle className='text-gray-400 hover:text-gray-600  text-lg lg:text-2xl' />
      </Link>
    </div>
  )
}

export default Navbar