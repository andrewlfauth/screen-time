import {loginUser} from '../services/users.server'
import {Form, useActionData} from '@remix-run/react'

export async function action({request}) {
  return loginUser(request)
}

function Index() {
  const action = useActionData()

  return (
    <div className="py-32 bg-blue-100">
      <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl'>
        <Form method="post" className="p-10 relative bg-white rounded-md w-[350px]">
          {
            action?.error && 
            <span className='absolute bottom-[10px] left-0 right-0 text-center font-semibold text-red-500'>{action.error}</span>
          }
          <h1 className="font-semibold text-xl mb-12 text-center">Welcome Back</h1>

          <div className="relative">
            <label htmlFor="username" className="absolute -top-8">
              Enter your <span className="font-medium text-blue-900">username</span>
            </label>
            <input required type="text" name="username" className="bg-blue-50 rounded-md p-1 w-full border outline-blue-900" />
          </div>
          <div className="relative mt-10">
            <label htmlFor="password" className="absolute -top-8">
              Enter your <span className="font-medium text-blue-900">password</span>
            </label>
            <input required type="text" name="password" className="bg-blue-50 rounded-md p-1 w-full border outline-blue-900" />
          </div>
          <button
            type="submit"
            className="rounded-md w-full py-2 bg-purple-400 mt-6 font-semibold"
          >
            Sign-up
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Index