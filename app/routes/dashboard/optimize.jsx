import CreatePlan from "../../components/dashboard/CreatePlan"
import Select from 'react-select'
import {useState} from 'react'
import shows from '~/shows.json'
import ShowCard from "../../components/ShowCard"

function Index() {
  const [focus, setFocus] = useState([])
  const [showInstructions, setShowInstructions] = useState(true)
  const [currentPlan, setCurrentPlan] = useState([])
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
    { value: 'vocabulary', label: 'Vocabulary' }
  ]
  const filterShows = (show) => {    
    return focus.map(f => f.value).some(f => show.focus.includes(f)) 
  }
  const updateFocus = (e) => {
    setFocus(e)
    setShowInstructions(false)
  }
  const updatePlan = (e) => {
    const show = e.target.parentElement.name
    if (currentPlan.includes(show)) {
      return setCurrentPlan(currentPlan.filter(c => c !== show))
    }
    return setCurrentPlan([...currentPlan, show])
  }

  return (
    <div className="px-2">
      <div className="bg-gray-100 p-4 rounded-md">
        {
          showInstructions ? (
            <>
              <h2 className='text-lg font-semibold mb-2'>
                Discover shows that fit your child's needs
              </h2>
              <p className="max-w-md">Select the learning goals that you want your child to focus on and we'll match you with shows with the same focus.</p>
            </>
          ) : <CreatePlan />
        }
      </div>

      <div className="bg-gray-100 rounded-md p-2 mt-2 md:max-w-[500px]">
        <label 
          htmlFor="focus" 
          className='text-xl font-bold mb-2 block'
        >
          Learning Goals
        </label>
        <Select
          placeholder='e.g. "Empathy"'
          className="w-fit min-w-[200px]" 
          name="focus"
          isMulti
          options={focusOptions}
          onChange={updateFocus}
        />
        <div className="grid gap-2 lg:gap-4 md:grid-cols-2 mt-4">
          {focus.length ? shows.map(s => {
            return filterShows(s) ? 
              <ShowCard 
                key={s.title} 
                show={s} 
                action="add"
                onClick={updatePlan} 
              /> : ""
          }) : ""}
        </div>
      </div>
    </div>

  )
}

export default Index