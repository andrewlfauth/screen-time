import {useMemo, useRef} from 'react'
import ShowCard from '../dashboard/FeaturedFocus'
import shows from '~/shows.json'

function FeaturedFocus() {
  const focuses = useMemo(() => [
    'decision making',
    'empathy',
    'cultural awareness',
    'literacy',
    'social skills',
    'problem-solving',
    'science',
    'making predictions',
    'imaginative play',
    'mathematics',
    'curiosity',
    'emotional skills',
    'nature',
    'history',
    'making observations',
    'persistence',
    'community',
    'vocabulary',
    'teamwork',
    'problem solving',
    'art',
    'outerspace',
    'animals'
  ], [])
  const featuredFocus = useRef(focuses[Math.floor(Math.random() * focuses.length)])
  const featuredShows = shows.filter(s => s.focus.includes(featuredFocus.current)).slice(0,3)
  
  return (
    <div className="bg-gray-100 rounded-md p-4">
      <h2 className='font-semibold mb-4 text-lg'>
        Featured Focus: 
        <span className='font-bold text-xl'>{" " + featuredFocus.current}</span>
      </h2>
      <div className="flex space-x-10">
        {featuredShows.map(s => <ShowCard key={s.title} show={s} />)}
      </div>
    </div>
  )
}

export default FeaturedFocus