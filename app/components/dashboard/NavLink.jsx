import {useLocation, Link} from '@remix-run/react'

function NavLink({to, title, children}) {
  const activePath = useLocation().pathname

  return (
    <div className='relative group'>
      <Link 
        to={to} 
        className={`${activePath === to ? "bg-blue-50 text-gray-900" : "text-gray-400"} rounded-md hover:bg-blue-50 hover:bg-opacity-90 p-2 flex lg:justify-between`}
      >
        <div className='flex'>
          {children}
          <span className='hidden lg:block'>{title}</span>
        </div>
      </Link>
      <div className='absolute px-4 py-1 ml-10 top-1/2 -translate-y-1/2 bg-gray-800 opacity-0 group-hover:opacity-100 text-white text-sm duration-300 rounded font-semibold pointer-events-none lg:hidden tracking-tight'>
        {title}
      </div>
    </div>
  )
}
export default NavLink