import {forwardRef, useState} from 'react'
import { Form, useTransition } from '@remix-run/react'

const NamePlanForm = forwardRef(function NamePlanForm({currentPlan, goBack}, ref) {
  const transition = useTransition()
  const [showSubmit, setShowSubmit] = useState(false)

  return (
    <Form method="post" className='max-h-[116px] mt-1'>
      <input type="hidden" name="plan" value={currentPlan} />
      <div className='flex justify-between mb-1'>
        <label 
          htmlFor="planName"
          className='font-semibold text-blue-900'
        >
          Name your plan
        </label>
        {showSubmit && (
          <button 
            type="submit"
            disabled={transition.submission}
            className='text-emerald-500 font-semibold'
          >
            {transition.submission ? "Saving..." : "Save"}
          </button>
        )}
      </div>
      <input 
        ref={ref}
        type="text" 
        name="planName" 
        required
        placeholder='e.g. "Manners & Curiosity"' 
        className='px-2 py-2 border rounded outline-blue-900 placeholder:text-sm w-full'
        onChange={(e) => e.target.value ? setShowSubmit(true) : setShowSubmit(false) }    
      />
    </Form>
  )
})

export default NamePlanForm