import {useFetcher} from '@remix-run/react'

function CreatePlan() {
  const fetcher = useFetcher()

  return (
    <fetcher.Form method="post" className=''>
      <h2 className='text-2xl font-medium'>
        Create a plan
      </h2>
      <p>Click the to save shows in a new plan</p>
      <div className='flex flex-col'>
        <label htmlFor="name" className='font-medium mb-1'>Name your plan</label>
        <input 
          type="text" name="name" placeholder='e.g. "starlight"' 
          className='px-2 py-1 rounded-md outline-purple-900 border shadow max-w-[200px]'
        />
      </div>
    </fetcher.Form>
  )
}

export default CreatePlan