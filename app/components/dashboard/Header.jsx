import { useLocation, Link } from '@remix-run/react'

function Header() {
  let pathArray = useLocation().pathname.split('/')
  let featuredPlan = pathArray.length === 5
  let ownedPlan = pathArray.length === 4
  let text = !featuredPlan
    ? ownedPlan
      ? 'My Plan'
      : pathArray[pathArray.length - 1]
          .replaceAll('%20', ' ')
          .charAt(0)
          .toUpperCase() +
        pathArray[pathArray.length - 1].replaceAll('%20', ' ').slice(1)
    : 'Featured Plan'

  return (
    <header className='p-4 mr-20'>
      <h1 className='flex flex-wrap text-lg font-semibold text-center select-none md:text-xl lg:text-2xl'>
        {text}
      </h1>
    </header>
  )
}

export default Header
