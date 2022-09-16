import { RiArrowUpDownFill } from 'react-icons/ri'
import {useState} from 'react'

function ShowInfo({show, toggle}) {
  const [showDescription, setShowDescription] = useState(false)

  return toggle ? (
    <div className="absolute w-full h-full py-2 overflow-y-auto text-white bg-blue-900 border-t-8 border-blue-900 select-none border-opacity-10 realtive bg-opacity-90 rounded-t-md">
      <div 
        className='absolute z-10 p-1 cursor-pointer top-1 left-1'
        onClick={() => setShowDescription(!showDescription)}
      >
        <RiArrowUpDownFill className='text-2xl text-slate-300'/>
      </div>
      <span className='block text-2xl font-medium text-center'>
        {showDescription ? "Description" : "Learning Goals"}
      </span>
      <div className='p-2 mx-4 mt-2 font-medium text-blue-900 rounded-md bg-slate-300'>
        {showDescription ? (
          <p>{show.description}</p>
        ) : (
          <div>
            {show.focus.map((f,i) => 
              <h2 
                className='mr-2 whitespace-nowrap' 
                key={f}
              >
                  {f}
              </h2> 
            )}
          </div>  
        )}
      </div>
    </div>
  ) : ""
}

export default ShowInfo