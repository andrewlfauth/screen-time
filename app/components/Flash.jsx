import {useState, useEffect} from 'react'



function Flash({duration, className, children}) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide(true)
    }, duration)

    return () => clearTimeout(timeout)
  }, [duration])

  return hide ? null : (
    <div className={className}>
      {children}
    </div>
  )
}

export default Flash