// 'use server'

import { createPost } from '@/actions/actions'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
  return (
    <div className='text-center pt-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
        <form action={createPost} className='h-10 space-x-2 mt-10'>
            <input type="text" name='title' placeholder='enter title for new post' className='border rounded px-3 h-full mr-2' required />
            <button className='h-full bg-black px-5 rounded text-white'>Submit</button>
        </form>
    </div>
  )
}
