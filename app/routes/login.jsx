import {loginUser} from '../services/users.server'
import {Form, useActionData} from '@remix-run/react'
import {useState} from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

export async function action({request}) {
  return loginUser(request)
}

function Index() {
  const action = useActionData()
  const [showPw, setShowPw] = useState(false)
  const [showPwChanger, setShowPwChanger] = useState(false)

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
          <label htmlFor="password" className="absolute flex items-center -top-8">
              Create your
              <span className="ml-1 font-medium text-blue-900">
                {" "} password
              </span>
              {showPwChanger ? (
                <div>
                  {showPw ? (
                      <AiOutlineEyeInvisible 
                        className='ml-2 text-2xl cursor-pointer text-emerald-500'
                        onClick={() => setShowPw(false)}
                      />
                    ) : (
                      <AiOutlineEye 
                        className='ml-2 text-2xl cursor-pointer text-emerald-500'
                        onClick={() => setShowPw(true)}
                      />
                  )}
                </div>
              ) : ""}
            </label>
            
            <input 
              required 
              type={showPw ? "text" : "password"} 
              name="password" 
              className="bg-blue-50 rounded-md p-1 w-full border outline-blue-900"
              onChange={(e) => {
                if (e.target.value.length) {
                  setShowPwChanger(true)
                } else {
                  setShowPwChanger(false)
                }
              }} 
            />
          </div>
          <button
            type="submit"
            className="rounded-md w-full text-white py-2 bg-blue-900 mt-6 font-semibold"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Index