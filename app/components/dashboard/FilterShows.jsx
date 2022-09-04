import {useState, useEffect} from 'react' 
import shows from '~/shows.json'
import ShowCard from '../ShowCard'
import SelectFilter from './SelectFilter'

function FilterShows() {
  const [ages, setAges] = useState([])
  const [focus, setFocus] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [value, setValue] = useState()
 
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
  const updateAges = (e) => {
    if (showAll && e.length) {
      setShowAll(false)
    } 
    setAges(e)
  }
  const updateFocus = (e) => {
    if (showAll && e.length) {
      setShowAll(false)
    } 
    setFocus(e)
  }

  const handleShowAll = () => {
    setShowAll(!showAll)
    setAges([])
    setFocus([])
    setValue(null)
  }

  return (
    <div className='p-4 rounded-md bg-gray-100 max-w-[600px]'>
      <h2 className='text-lg font-semibold'>
        Find shows by:
      </h2>

      <div className='flex mt-2 space-x-4'>
        <div className='min-w-[100px]'>
          <SelectFilter
            name="age"
            value={value}
            options={ageOptions} 
            onChange={updateAges} 
            />
        </div>
        <div className='min-w-[200px]'>
          <SelectFilter
            name="focus"
            value={value}
            options={focusOptions} 
            onChange={updateFocus} 
          />
        </div>
        <button
          onClick={handleShowAll}
          className={`${showAll ? "bg-green-300" : "bg-white"} rounded-md border border-gray-300 duration-300 h-[38px] px-5 block self-end font-`}
        >
          Show All
        </button>
      </div>

      <div className='grid gap-2 grid-cols-2 mt-4'>
        {
          !showAll && (ages?.length || focus?.length) ? 
          shows.map(show => {
            return filterShows(show) ? 
              <ShowCard key={show.title} show={show} />
              : ''
            }) : ''
        }
        {
          showAll && (!ages?.length || !focus?.length) &&
          shows.map(show => <ShowCard key={show.title} show={show} />)
        }
      </div>
    </div>
  )
}

export default FilterShows