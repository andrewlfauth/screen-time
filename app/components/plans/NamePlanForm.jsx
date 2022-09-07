import {forwardRef} from 'react'
import { Form } from '@remix-run/react'

const NamePlanForm = forwardRef(function NamePlanForm({currentPlan, goBack}, ref) {
  return (
    <Form method="post" className='flex max-h-[116px]'>
      <div className='relative px-4 pt-2 '>
        <input type="hidden" name="plan" value={currentPlan} />
        <label 
          htmlFor="planName"
          className='font-semibold -top-[9px] text-purple-900 absolute text-xs'
        >
            Name your plan
          </label>
        <input 
          ref={ref}
          type="text" name="planName" required
          placeholder='e.g. "Manners & Curiosity"' 
          className='outline-none shadow-inner placeholder:text-sm py-2 px-2 rounded'
        />
      </div>
      <div className='space-x-2 mt-[10px] -ml-2'>
        <button 
          type="submit"
          className='px-4 rounded h-full font-semibold bg-emerald-500'
        >
          Save
        </button>
        <button
          className='bg-gray-200 h-full font-semibold px-4 rounded'
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </Form>
  )
})

export default NamePlanForm