import { useState, useRef } from 'react'
import shows from '~/shows.json'
import ShowCard from '../ShowCard'
import SelectFilter from './SelectFilter'

function ShowSearch() {
  const [ages, setAges] = useState([])
  const [focus, setFocus] = useState([])
  const [showAll, setShowAll] = useState(false)
  const ageInputRef = useRef()
  const focusInputRef = useRef()

  const ageOptions = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
  ]
  const focusOptions = [
    { value: 'animals', label: 'Animals' },
    { value: 'art', label: 'Art' },
    { value: 'community', label: 'Community' },
    { value: 'cultural awareness', label: 'Cultural Awareness' },
    { value: 'curiosity', label: 'Curiosity' },
    { value: 'decision making', label: 'Decision Making' },
    { value: 'emotional skills', label: 'Emotional Skills' },
    { value: 'empathy', label: 'Empathy' },
    { value: 'history', label: 'History' },
    { value: 'imaginative play', label: 'Imaginative Play' },
    { value: 'literacy', label: 'Literacy' },
    { value: 'making observations', label: 'Making Observations' },
    { value: 'making predictions', label: 'Making Predictions' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'nature', label: 'Nature' },
    { value: 'outerspace', label: 'Outerspace' },
    { value: 'persistence', label: 'Persistence' },
    { value: 'problem-solving', label: 'Problem Solving' },
    { value: 'science', label: 'Science' },
    { value: 'social skills', label: 'Social Skills' },
    { value: 'teamwork', label: 'Teamwork' },
    { value: 'vocabulary', label: 'Vocabulary' },
  ]
  const filterShows = (show) => {
    if (ages && !focus.length) {
      return ages.map((a) => a.value).every((a) => show.ages.includes(a))
    }
    if (focus && !ages.length) {
      return focus.map((f) => f.value).every((f) => show.focus.includes(f))
    }
    return (
      ages.map((a) => a.value).every((a) => show.ages.includes(a)) &&
      focus.map((f) => f.value).every((f) => show.focus.includes(f))
    )
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
    if (!showAll) {
      setAges([])
      setFocus([])
      ageInputRef.current.clearValue()
      focusInputRef.current.clearValue()
    }
    setShowAll(!showAll)
  }

  return (
    <div className='w-full px-4 py-6 bg-white rounded-md shadow sm:pt-8 sm:pb-4 md:w-fit'>
      <div className='flex justify between'>
        <div className='max-w-md'>
          <h1 className='mb-2 text-2xl font-semibold tracking-tighter sm:text-4xl'>
            Discover the shows that fit your child's needs
          </h1>
          <h2 className='mt-4 text-xl font-semibold sm:mt-8'>Search by</h2>
          <div className='flex flex-col mt-2 sm:flex-row sm:space-x-4'>
            <SelectFilter
              name='focus'
              ref={focusInputRef}
              options={focusOptions}
              onChange={updateFocus}
              className='min-w-[200px] mb-2 sm:mb-0'
            />
            <SelectFilter
              name='age'
              ref={ageInputRef}
              options={ageOptions}
              onChange={updateAges}
              className='min-w-[100px] mb-4 sm:mb-0'
            />
            <button
              onClick={handleShowAll}
              className={`${
                showAll ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'
              } rounded border-neutral-500 border-opacity-40 duration-100 border h-[38px] w-fit px-5 block sm:self-end font-semibold`}
            >
              All
            </button>
          </div>
        </div>
        <div className='items-end hidden -mb-2 select-none sm:flex'>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/w_180/v1663361815/Screen%20Time/card_8_sft2og.png'
            alt='sloth'
          />
        </div>
      </div>
      <div className='grid gap-2 mt-4 lg:gap-4 sm:grid-cols-2'>
        {!showAll && (ages?.length || focus?.length)
          ? shows.map((show) => {
              return filterShows(show) ? (
                <ShowCard key={show.title} show={show} />
              ) : (
                ''
              )
            })
          : ''}
        {showAll &&
          (!ages?.length || !focus?.length) &&
          shows.map((show) => <ShowCard key={show.title} show={show} />)}
      </div>
    </div>
  )
}

export default ShowSearch
