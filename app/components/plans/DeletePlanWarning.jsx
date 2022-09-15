import { Form, useTransition } from "@remix-run/react"

function DeletePlanWarning({planName, show, cancel}) {
  const transition = useTransition()

  return (
    <div className='absolute z-50 p-4 bg-white rounded shadow right-4 top-4'>
      <p className='text-center'>
        Are you sure you want to delete
        <br /> 
        {transition.submission ? (
          <span className='text-lg font-medium text-red-500'>Deleting...</span>
        ) : (
          <span className='text-lg font-medium text-blue-900'>{planName}</span>
        )}
      </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Form method="post">
            <button 
              type="submit"
              disabled={transition.submission}
              className="px-4 py-2 font-semibold text-white duration-100 bg-blue-900 rounded hover:bg-opacity-90"
            >
              Yes 👍
            </button>
          </Form>
          <button
            onClick={cancel}
            className="px-4 py-2 font-semibold duration-100 bg-gray-200 rounded text-neutral-600 hover:bg-opacity-90"
          >
            No 👎
          </button>
        </div>
    </div>
    )
}

export default DeletePlanWarning