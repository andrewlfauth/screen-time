import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

function AddButton({onClick, show, added}) {
  return (    
    <button 
      data-show-image={show}
      className='relative group'
      onClick={onClick}
    >
      <div className="absolute opacity-0 -top-12 group-hover:opacity-100 z-10 bg-white text-center text-black font-bold py-1 w-24 rounded-full -right-10 text-sm">
        <div className="w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]"></div>
        {added ? "Remove" : "Add"}
      </div>
      {
        added ?
          <AiOutlineMinusCircle className="text-white pointer-events-none text-2xl" />
        :  
          <AiOutlinePlusCircle className="text-white pointer-events-none text-2xl" />
      }
      </button>
  )
}

export default AddButton