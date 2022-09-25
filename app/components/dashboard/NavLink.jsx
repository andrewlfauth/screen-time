import { useLocation, Link, useTransition } from '@remix-run/react'
import { useEffect, useState } from 'react'

function NavLink({ to, title, children }) {
  const activePath = useLocation().pathname
  const transition = useTransition()
  const [spin, setSpin] = useState(false)
  const isLoading =
    transition.state === 'loading' && transition.location.pathname === to

  useEffect(() => {
    if (isLoading) {
      let t1 = setTimeout(() => {
        setSpin(true)
      }, 300)
      return () => clearTimeout(t1)
    } else {
      setSpin(false)
    }
  }, [isLoading])

  return (
    <div className='relative group'>
      <Link
        prefetch='intent'
        to={to}
        className={`${
          to === '/dashboard'
            ? activePath === to
              ? 'bg-blue-50 text-gray-900'
              : 'text-gray-400 hover:bg-blue-50 hover:bg-opacity-60'
            : activePath.includes(to)
            ? 'bg-blue-50 text-gray-900'
            : 'text-gray-400 hover:bg-blue-50 hover:bg-opacity-60'
        }
        rounded-md p-2 flex lg:justify-between`}
      >
        <div className='flex'>
          <div className={`${spin ? 'animate-spin' : ''} lg:mr-4`}>
            {children}
          </div>
          <span className='hidden lg:block'>{title}</span>
        </div>
      </Link>
      <div className='absolute px-4 py-1 ml-10 text-sm font-semibold tracking-tight text-white duration-300 -translate-y-1/2 bg-gray-800 rounded opacity-0 pointer-events-none top-1/2 group-hover:opacity-100 lg:hidden'>
        {title}
      </div>
    </div>
  )
}
export default NavLink
