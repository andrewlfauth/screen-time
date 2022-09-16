function Index() {
  return (
    <div className='py-10 '>
      <h1 className='px-4 text-lg lg:text-2xl font-semibold'>Info</h1>
      <p className='mt-10'>
        <span className='text-sm'>Created by:{" "}</span>
        <span className='font-semibold block ml-2 text-blue-900 '>Andrew L Fauth</span>
      </p>
      <p className='mt-4 lg:mt-6'>
        <span className='text-sm'>Assets by:{" "}</span>
        <a 
          href="https://www.figma.com/@andreykrivenko" target="_blank" 
          rel="noreferrer"
          className='font-semibold block underline ml-2 text-blue-900'
        >
          Andrey Krivenko
        </a>
        <span className="text-sm ml-4">
          Little Book for Kidgarden
        </span>
        <a 
          href="https://www.figma.com/@Sujan_khadka" target="_blank" 
          rel="noreferrer"
          className='font-semibold mt-2 block underline ml-2 text-blue-900'
        >
          Sujan Khadka
        </a>
        <span className="text-sm ml-4">
          Vector Cute Animal Set Collection
        </span>
        <a 
          href="https://www.pbskids.org" target="_blank" 
          rel="noreferrer"
          className='font-semibold mt-2 block underline ml-2 text-blue-900'
        >
          PBS Kids
        </a>
        <span className="text-sm ml-4">
          Show Card Images
        </span>
      </p>
      <p className='mt-4 lg:mt-6'>
        <span className='text-sm'>Source Code:{" "}</span>
        <a 
          href="https://github.com/andrewlfauth/screen-time" 
          target="_blank"
          rel="noreferrer"
          className='font-semibold block underline ml-2 text-blue-900 '>Github</a>
      </p>
    </div>
  )
}

export default Index