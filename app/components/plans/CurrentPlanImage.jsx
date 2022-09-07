import {AiOutlineClose} from 'react-icons/ai'

function CurrentPlanImage({image, handleRemoveImage}) {
  return (
    <div 
      data-image={image}
      className="group cursor-pointer relative m-1"
      onClick={handleRemoveImage}
    >
      <img 
        src={image} 
        alt="" 
        className="w-20 rounded" 
      />
      <div className='absolute border border-black bg-gray-100 -right-2 -top-2 hidden group-hover:block rounded-full bg-white shadow p-1'>
        <AiOutlineClose className='pointer-events-none text-xs' />
      </div>
    </div>
  )
}

export default CurrentPlanImage