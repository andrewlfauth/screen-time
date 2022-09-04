import {useState} from 'react' 
import shows from '~/shows.json'
import ShowCard from '../ShowCard'
import SelectFilter from './SelectFilter'

function DisplayShows() {
  const [ages, setAges] = useState([])
  const [focus, setFocus] = useState([])
 
  const ageOptions = [
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
    {value: 10, label: "10"},
    {value: 11, label: "11"},
  ]
  const focusOptions = [
    { value: 'decision making', label: 'Decision Making' },
    { value: 'empathy', label: 'Empathy' },
    { value: 'cultural awareness', label: 'Cultural Awareness' },
    { value: 'literacy', label: 'Literacy' },
    { value: 'social skills', label: 'Social Skills' },
    { value: 'problem-solving', label: 'Problem Solving' },
    { value: 'science', label: 'Science' },
    { value: 'making predictions', label: 'Making Predictions' },
    { value: 'imaginative play', label: 'Imaginative Play' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'curiosity', label: 'Curiosity' },
    { value: 'emotional skills', label: 'Emotional Skills' },
    { value: 'nature', label: 'Nature' },
    { value: 'history', label: 'History' },
    { value: 'making observations', label: 'Making Observations' },
    { value: 'persistence', label: 'Persistence' },
    { value: 'community', label: 'Community' },
    { value: 'vocabulary', label: 'Vocabulary' },
    { value: 'teamwork', label: 'Teamwork' },
    { value: 'art', label: 'Art' },
    { value: 'outerspace', label: 'Outerspace' },
    { value: 'animals', label: 'Animals' }
  ]

  const filterShows = (show) => {    
    if (ages && !focus.length) {
      return ages.map(a => a.value).every(a => show.ages.includes(a)) 
    }
    if (focus && !ages.length) {
      return focus.map(f => f.value).every(f => show.focus.includes(f)) 
    }
    return ages.map(a => a.value).every(a => show.ages.includes(a)) &&
    focus.map(f => f.value).every(f => show.focus.includes(f))
  }
  
  return (
    <div className='p-4 rounded-md bg-gray-100'>
      <h2 className='text-lg font-semibold'>
        Filter shows by:
      </h2>
      <div className='flex w-full'>
        <div className='min-w-[200px]'>
          <SelectFilter
            name="age"
            options={ageOptions} 
            onChange={(e) => setAges(e)} 
          />
        </div>
        <div className='min-w-[500px]'>
          <SelectFilter
            name="focus"
            options={focusOptions} 
            onChange={(e) => setFocus(e)} 
          />
        </div>
      </div>
    
      <div className='grid grid-cols-3'>
      {ages?.length || focus?.length ? shows.map(show => {
        return filterShows(show) ? 
          <ShowCard key={show.title} show={show} />
          : ''
        }) : ""
      }
      </div>
    </div>
  )
}

export default DisplayShows