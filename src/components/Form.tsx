import { createPost } from '@/actions/actions'
import React from 'react'

export default function Form() {
  return (
    <div>
        <form action={createPost} className='flex flex-col m-auto space-y-4 mt-10 max-w-[400px]'>
        <input type="text" name='title' placeholder='enter title for new post' className='border rounded px-3 h-full mr-2' required />
        <textarea name="body" placeholder='Body content for the new post' className='border rounded px-3 h-full' rows={6} required />
        <button className='h-full bg-sky-700 px-5 rounded text-white'>Submit</button>
      </form>
    </div>
  )
}
