import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { useFetcher, useLocation } from '@remix-run/react'
import { userAtom } from '~/routes/dashboard'
import { useAtom } from 'jotai'

function LikeButton({ show }) {
  const path = useLocation().pathname
  const [user] = useAtom(userAtom)
  const fetcher = useFetcher()
  const [like, setLike] = useState(
    path === '/dashboard/favorites' ? true : user?.likes?.includes(show)
  )

  return (
    <fetcher.Form method='post' action='/dashboard/shows' className='h-[20px]'>
      <input type='hidden' name='show' value={show} />
      <button
        name='action'
        value={like ? 'like' : 'unlike'}
        type={user ? 'submit' : 'button'}
        onClick={() => setLike(!like)}
        className='relative group'
      >
        <div className='absolute z-10 w-24 py-1 text-sm font-bold text-center text-black duration-100 delay-200 scale-75 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 group-hover:scale-100 -top-12 -left-10'>
          <div className='w-2 h-2 bg-white absolute left-0 right-0 mx-auto rotate-45 -bottom-[4px]'></div>
          {user ? (like ? 'Unlike' : 'Like') : 'Login to like'}
        </div>
        {like ? (
          <FaHeart className='text-xl text-pink-300 hover:scale-110' />
        ) : (
          <FaRegHeart className='text-xl text-white duration-100 hover:scale-110' />
        )}
      </button>
    </fetcher.Form>
  )
}

export default LikeButton
