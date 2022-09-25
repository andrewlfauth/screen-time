import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function AddButton({ onClick, show, added }) {
  return (
    <button data-show-image={show} className='relative group' onClick={onClick}>
      <div className='absolute z-10 w-24 py-1 text-sm font-bold text-center text-black duration-100 delay-200 scale-75 bg-white rounded-full shadow opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 -top-12 -right-10'>
        <div className='w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]'></div>
        {added ? 'Remove' : 'Add'}
      </div>
      {added ? (
        <AiOutlineMinusCircle className='text-2xl text-white pointer-events-none' />
      ) : (
        <AiOutlinePlusCircle className='text-2xl text-white pointer-events-none' />
      )}
    </button>
  )
}

export default AddButton
