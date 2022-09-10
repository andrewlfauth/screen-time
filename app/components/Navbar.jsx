import {FaRegLightbulb} from 'react-icons/fa'

function Navbar({toggle}) {
  return (
    <div className='absolute top-0 left-0 z-50 flex justify-between w-screen py-2'>
      <div>
        <span className='hidden lg:block'>large</span>
        <span className='hidden md:block lg:hidden'>medium</span>
        <span className='hidden sm:block md:hidden'>small</span>
        <span className='sm:hidden'>tiny</span>
      </div>
      <button 
          onClick={toggle}
        >
          <FaRegLightbulb className="text-2xl" />
        </button>
    </div>
  )
}

export default Navbar