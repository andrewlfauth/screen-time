import {AiOutlinePlusCircle} from 'react-icons/ai'

function AddButton({onClick, show}) {
  return (    
    <button 
      name={show}
      className='relative group'
      onClick={onClick}
    >
      <div className="absolute opacity-0 -top-12 group-hover:opacity-100 z-10 bg-white text-center text-black font-bold py-1 w-24 rounded-full -right-10 text-sm">
        <div className="w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]"></div>
        Add to plan
      </div>
      <AiOutlinePlusCircle className="text-white text-2xl" />
      </button>
  )
}

export default AddButton