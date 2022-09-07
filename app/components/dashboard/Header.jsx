import {useLocation, Link} from '@remix-run/react'

function Header() {
  const pathArr = useLocation().pathname.split('/').filter(p => p)

  return (
    <header className='pb-6 mr-20'>
        <h1 className="text-center flex justify-center items-center select-none text-lg md:text-xl lg:text-2xl flex-wrap font-semibold">
          {pathArr.map((s,i) => (
            i === pathArr.length - 1 ? 
              <span key={i} className='text-emerald-700 text-xl md:text-2xl lg:text-3xl whitespace-nowrap'>{s.replaceAll('%20', " ")}</span> :
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