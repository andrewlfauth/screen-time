import { RiArrowUpDownFill } from 'react-icons/ri'
import {useState} from 'react'

function ShowInfo({show, toggle}) {
  const [showDescription, setShowDescription] = useState(false)

  return toggle ? (
    <div className="h-full select-none realtive w-full text-white bg-blue-900 bg-opacity-90 py-2 absolute rounded-t-md overflow-y-auto">
      <div 
        className='p-1 cursor-pointer z-10 absolute top-1 left-1'
        onClick={() => setShowDescription(!showDescription)}
      >
        <RiArrowUpDownFill className='text-2xl text-slate-300'/>
      </div>
      <span className='text-center font-medium text-2xl block'>
        {showDescription ? "Description" : "Learning Goals"}
      </span>
      <div className='p-2 bg-slate-300 font-medium mx-4 text-blue-900 rounded-md  mt-2'>
        {showDescription ? (
          <p>{show.description}</p>
        ) : (
          <div>
            {show.focus.map((f,i) => 
              <h2 
                className='whitespace-nowrap mr-2' 
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