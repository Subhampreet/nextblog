// 'use server'

import { createPost } from '@/actions/actions'
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
  return (
    <div className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
      <form action={createPost} className='flex flex-col m-auto space-y-4 mt-10 max-w-[400px]'>
        <input type="text" name='title' placeholder='enter title for new post' className='border rounded px-3 h-full mr-2' required />
        <textarea name="body" placeholder='Body content for the new post' className='border rounded px-3 h-full' rows={6} required />
        <button className='h-full bg-sky-700 px-5 rounded text-white'>Submit</button>
      </form>


      <div className='mt-3 p-3 pt-0 pb-0 bg-black max-w-[400px] m-auto text-slate-100 rounded'>
        <LogoutLink>Log Out</LogoutLink>

      </div>
    </div>
  )
}
