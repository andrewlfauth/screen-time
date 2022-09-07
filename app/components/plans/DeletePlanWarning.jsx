import { Form } from "@remix-run/react"

function DeletePlanWarning({planName, show, cancel}) {
  return (
    <div className='absolute right-4 rounded shadow bg-white p-4 z-50'>
      <p className='text-center'>
        Are you sure you want to delete
        <br /> 
        <span className='font-medium text-lg text-purple-900'>{planName}</span>
      </p>
        <div className="flex space-x-4 mt-4 justify-center">
          <Form>
            <button 
              type="submit"
              name="action"
              value="delete"
              className="px-4 py-2 hover:bg-opacity-90 rounded bg-emerald-400 font-semibold duration-100"
            >
              Yes 👍
            </button>
          </Form>
          <button
            onClick={cancel}
            className="px-4 py-2 rounded font-semibold text-neutral-600 bg-gray-200 hover:bg-opacity-90 duration-100"
          >
            No 👎
          </button>
        </div>
    </div>
    )
}

export default DeletePlanWarning