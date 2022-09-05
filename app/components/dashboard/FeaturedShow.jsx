import shows from '~/shows.json'
import ShowCard from '../ShowCard'

function FeaturedShow() {
  const feature = shows[10]
  return (
    <div className='rounded-md bg-gray-100 mt-2 p-4 w-fit'>
      <h2 className='text-lg font-semibold mb-2'>
        Featured Show: 
        <span className='font-bold'>{" " + feature.title}</span>
      </h2>
      <ShowCard show={feature} likeButton={false} />
      <p className='max-w-xs text-sm -medium mt-2'>
        Teaches kids about
        {feature.focus.map((f,i) => 
          <span className='font-semibold' key={f}>
            {i === feature.focus.length - 1 ? ` and ${f}.` : ` ${f},`}
          </span>
        )}
      </p>
    </div>
  )
}

export default FeaturedShow