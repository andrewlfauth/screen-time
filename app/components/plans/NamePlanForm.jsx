import {forwardRef} from 'react'
import { Form } from '@remix-run/react'

const NamePlanForm = forwardRef(function NamePlanForm({currentPlan, goBack}, ref) {
  return (
    <Form method="post" className='flex max-h-[116px] mt-6'>
      <div className='relative pt-2 '>
        <input type="hidden" name="plan" value={currentPlan} />
        <label 
          htmlFor="planName"
          className='font-semibold -top-[18px] text-blue-900 absolute'
        >
            Name your plan
          </label>
        <input 
          ref={ref}
          type="text" name="planName" required
          placeholder='e.g. "Manners & Curiosity"' 
          className='px-2 py-2 border rounded outline-blue-900 placeholder:text-sm'
        />
      </div>
      <div className='space-x-2 mt-[10px] ml-2 flex'>
        <button 
          type="submit"
          className='h-full px-4 font-semibold text-white bg-blue-900 rounded'
        >
          Save
        </button>
        {/* <button
          className='h-full px-4 font-semibold rounded bg-blue-50 text-neutral-500'
          onClick={goBack}
        >
          Back
        </button> */}
      </div>
    </Form>
  )
})

export default NamePlanForm