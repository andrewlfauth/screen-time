import shows from '~/shows.json'
import ShowCard from '../ShowCard'
import {useRef} from 'react'

function FeaturedShow() {
  let dateRef = useRef(new Date().getDate())
  if (dateRef.current > 25) {
    dateRef.current = dateRef.current - 20
  }
  const feature = shows[dateRef.current]
  
  return (
    <div className='p-4 bg-white rounded-md shadow w-fit'>
      <h2 className='mb-2 text-lg font-semibold'>
        🍿 Featured Show:
        <span className='text-xl text-blue-900'>{" " + feature.title}</span>
      </h2>
      <ShowCard show={feature} likeButton={false} />
    </div>
  )
}

export default FeaturedShow