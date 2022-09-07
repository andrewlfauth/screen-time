import {useState, useEffect} from 'react'



function Flash({duration, children}) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide(true)
    }, duration)

    return () => clearTimeout(timeout)
  }, [duration])

  return hide ? null : (
    <div>
      {children}
    </div>
  )
}

export default Flash