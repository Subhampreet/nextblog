// 'use server'

import Form from '@/components/Form'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

export default async function page() {
  return (
    <div className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
      
      <Form />

      <div className='mt-3 p-3 pt-0 pb-0 bg-black max-w-[400px] m-auto text-slate-100 rounded'>
        <LogoutLink>Log Out</LogoutLink>

      </div>
    </div>
  )
}
