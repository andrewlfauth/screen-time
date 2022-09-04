import {useState, useEffect} from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } 
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: light)').matches)) {
      setDarkMode(false)
    }
  },[])

  useEffect(() => {
    darkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  }, [darkMode])

  return {darkMode, setDarkMode}
}