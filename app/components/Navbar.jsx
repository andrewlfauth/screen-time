import {FaRegLightbulb} from 'react-icons/fa'

function Navbar({toggle}) {
  return (
    <div className='z-50 absolute flex justify-between w-screen'>
      <div>
        <span className='hidden lg:block'>large</span>
        <span className='hidden md:block lg:hidden'>medium</span>
        <span className='hidden sm:block md:hidden'>small</span>
        <span className='sm:hidden'>tiny</span>
      </div>
      <button
          className="absolute right-2" 
          onClick={toggle}
        >
          <FaRegLightbulb className="text-2xl" />
        </button>
    </div>
  )
}

export default Navbar