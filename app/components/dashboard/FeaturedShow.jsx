import shows from '~/shows.json'
import ShowCard from '../ShowCard'

function FeaturedShow() {
  const feature = shows[10]
  return (
    <div className='rounded-md bg-gray-100 p-4 w-fit'>
      <h2 className='text-lg font-semibold mb-2'>
        🍿 Featured Show:
        <span className='text-xl text-blue-900'>{" " + feature.title}</span>
      </h2>
      <ShowCard show={feature} likeButton={false} />
    </div>
  )
}

export default FeaturedShow