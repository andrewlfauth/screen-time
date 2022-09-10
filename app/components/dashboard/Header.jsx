import {useLocation, Link} from '@remix-run/react'

function Header() {
  let pathArr = useLocation().pathname.split('/').filter(p => p)
  if (pathArr.length === 4) pathArr = pathArr.splice(3,1)

  return (
    <header className='pb-6 mr-20'>
        <h1 className="flex flex-wrap items-center justify-center text-lg font-semibold text-center select-none md:text-xl lg:text-2xl">
          {pathArr.map((s,i) => (
            i === pathArr.length - 1 ? 
              <span key={i} className='text-xl text-emerald-700 md:text-2xl lg:text-3xl whitespace-nowrap'>{s.replaceAll('%20', " ")}</span> :
              <div key={i} className="flex">
                <Link
                  to={i === 0 ? '/dashboard' : `/dashboard/${s}`} 
                  className='text-gray-500 hover:underline'
                >
                  {s}
                </Link> 
                <span className='text-purple-900 mx-[5px]'>{`>`}</span>
              </div>
          ))}
        </h1>
      </header>
  )
}

export default Header