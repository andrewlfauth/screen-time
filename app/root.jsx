import tailwindURL from './styles/tailwind'
import {connect} from './services/db.server'
import Navbar from './components/Navbar'
import { useLocation } from '@remix-run/react';
import Nav from './components/dashboard/Nav'
import NotFound from './components/NotFound'
import ErrorPage from './components/NotFound'

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
  title: "Screen Time App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
  return [
    {rel: "stylesheet", href: tailwindURL},
    {rel: "icon", href: "https://res.cloudinary.com/dpnkrz8c8/image/upload/w_20/v1663012532/Screen%20Time/image_13_1_nycrjx.png"},
  ]
}

export const CatchBoundary = () => {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NotFound />
        <Scripts />
      </body>
    </html>
  )
}

export const ErrorBoundary = () => {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorPage />
        <Scripts />
      </body>
    </html>
  )
}

export async function loader() {
  connect()
  return null
}

export default function App() {
  const path = useLocation().pathname
  let showSidebar = 
    path !== "/login" &&
    path !== '/get-started' &&
    path !== '/'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body className='font-inter'>
        <Navbar />
        {showSidebar ? (
          <div className="flex min-h-screen">
            {showSidebar && <Nav />}
            <div className="w-full bg-blue-50 flex jusitfy-center p-4 ml-[40px] lg:ml-[225px]">
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
