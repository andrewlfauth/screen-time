import { AiOutlineClose } from 'react-icons/ai'

function CurrentPlanImage({ image, handleRemoveImage }) {
  return (
    <div
      data-image={image}
      className='relative m-1 cursor-pointer group'
      onClick={handleRemoveImage}
    >
      <img src={image} alt='' className='w-20 rounded' />
      <div className='absolute hidden p-1 bg-white border border-black rounded-full shadow -right-2 -top-2 group-hover:block'>
        <AiOutlineClose className='text-xs pointer-events-none' />
      </div>
    </div>
  )
}

export default CurrentPlanImage
