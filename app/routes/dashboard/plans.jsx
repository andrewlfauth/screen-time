import {useState, useEffect, useRef} from 'react'
import SavedPlans from '~/components/plans/SavedPlans'
import FeaturedPlans from '~/components/plans/FeaturedPlans'
import Hero from '../../components/plans/Hero'
import { getUser } from "~/services/users.server"
import { createPlan, getFeaturedPlans } from "~/services/plans.server"
import { useLoaderData, useActionData } from '@remix-run/react'

export async function action({request}) {
  return createPlan(request)
}

export async function loader({request}) {
  const user = await getUser(request)
  const featuredPlans = await getFeaturedPlans(user.username)
  return {savedPlans: user.plans, featuredPlans}
}

function Index() {
  const plans = useLoaderData()
  const action = useActionData()
  const selectRef = useRef(null)
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

  useEffect(() => {
    if (action?.success) {
      setCurrentPlan([])
      setFocus([])
      selectRef.current.clearValue()
    }
  }, [action])

  return (
    <div className='w-full'>
      <Hero 
        selectRef={selectRef}
        focusOptions={focusOptions}
        onClick={updatePlan}
        clearPlan={() => setCurrentPlan([])}
        action={action}
        currentPlan={currentPlan}
        focus={focus}
        onChange={(e) => setFocus(e)}
        removeImage={(e) => 
          setCurrentPlan(currentPlan.filter(s => 
            s !== e.target.parentElement.getAttribute('data-image')))}
      />
      <div className='flex flex-col w-full mt-4 space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
        <SavedPlans plans={plans.savedPlans} />
        <FeaturedPlans plans={plans.featuredPlans} />
      </div>
    </div>
  )
}

export default Index