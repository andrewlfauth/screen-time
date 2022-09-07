import {forwardRef} from 'react'
import { Form } from '@remix-run/react'

const NamePlanForm = forwardRef(function NamePlanForm({currentPlan, clearPlan}, ref) {
  return (
    <Form method="post" className='flex max-h-[116px]'>
      <div className='flex shadow border flex-col px-4 rounded bg-white'>
        <input type="hidden" name="plan" value={currentPlan} />
        <label 
          htmlFor="planName"
          className='font-semibold text-sm'
        >
            Name your plan
          </label>
        <input 
          ref={ref}
          type="text" name="planName" required
          placeholder='e.g. "Manners & Curiosity"' 
          className='outline-none'
        />
      </div>
      <div className='space-x-2 ml-2'>
        <button 
          type="submit"
          className='h-full px-4 rounded font-semibold bg-emerald-500'
        >
          Save
        </button>
        <button
          className='bg-gray-200 h-full font-semibold px-4 rounded'
          onClick={clearPlan}
        >
          Back
        </button>
      </div>
    </Form>
  )
})

export default NamePlanForm