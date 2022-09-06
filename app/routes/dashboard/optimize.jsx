import CreatePlan from "../../components/dashboard/CreatePlan"
import {useState} from 'react'
import shows from '~/shows.json'
import ShowCard from "../../components/ShowCard"
import CurrentPlan from '~/components/optimize/CurrentPlan'
import LearningGoalsSelect from '~/components/optimize/LearningGoalsSelect'
import LearningGoalsDisplay from '~/components/optimize/LearningGoalsDisplay'

function Index() {
  const [focus, setFocus] = useState([])
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
  const updatePlan = (e) => {
    const show = e.target.getAttribute('data-show-image')
    if (currentPlan.includes(show)) {
      return setCurrentPlan(currentPlan.filter(c => c !== show))
    }
    return setCurrentPlan([...currentPlan, show])
  }

  return (
    <div className="px-2">
      <CurrentPlan 
        currentPlan={currentPlan}
        handleRemoveImage={(e) => 
          setCurrentPlan(currentPlan.filter(s => 
            s !== e.target.parentElement.getAttribute('data-image')))
        } 
      />
      <div className="bg-gray-100 rounded-md p-2 mt-2 md:max-w-[500px]">
        <LearningGoalsSelect 
          options={focusOptions}
          onChange={(e) => setFocus(e)}
        />
        <LearningGoalsDisplay 
          focus={focus}
          onClick={updatePlan}
          currentPlan={currentPlan}
        />
      </div>
    </div>

  )
}

export default Index