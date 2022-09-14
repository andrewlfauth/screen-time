import tailwindURL from './styles/tailwind'
import useDarkMode from './components/hooks/useDarkMode';
import {connect} from './services/db.server'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { useLocation, Link } from '@remix-run/react';
import New from './components/sidebar/New'

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
  return [
    {rel: "stylesheet", href: tailwindURL}
  ]
}

export async function loader() {
  connect()
  return null
}

export default function App() {
  const {darkMode, setDarkMode} = useDarkMode()
  const path = useLocation().pathname
  let showSidebar = 
    path !== "/login" &&
    path !== '/get-started' &&
    path !== '/'

  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body className='font-inter'>
        <Navbar toggle={() => setDarkMode(!darkMode)} />
        {showSidebar ? (
          <div className="flex min-h-screen">
            {showSidebar && <New />}
            <div className="w-full bg-blue-50 flex jusitfy-center p-4 lg:p-8">
              <Outlet />
            </div>
          </div>
        ) : <Outlet /> }
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
