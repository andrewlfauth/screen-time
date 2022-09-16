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
    <div className="flex justify-center h-screen py-32 lg:items-center bg-neutral-50">
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <Form method="post" className="p-10 relative bg-white rounded-md w-[350px]">
          {
            action?.error && 
            <span className='absolute bottom-[10px] left-0 right-0 text-center font-semibold text-red-500'>{action.error}</span>
          }
          <h1 className="mb-12 text-xl font-semibold text-center">Welcome Back</h1>

          <div className="relative">
            <label htmlFor="username" className="absolute -top-8">
              Enter your <span className="font-medium text-blue-900">username</span>
            </label>
            <input required type="text" name="username" className="w-full p-1 border rounded-md bg-blue-50 outline-blue-900" />
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
              className="w-full p-1 border rounded-md bg-blue-50 outline-blue-900"
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
            className="w-full py-2 mt-6 font-semibold text-white bg-blue-900 rounded-md"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Index