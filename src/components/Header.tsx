import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
]

export default function Header() {
    return (
        <div className='flex justify-between items-center py-4 px-7 border-b'>
            <Link href='/'>
                <Image
                    src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                    alt='Logo'
                    className="w-[35px] h-[35px]"
                    width={35}
                    height={35}
                />
            </Link>
            <nav>
                <ul className='flex gap-x-5 text-[15px]'>
                    {
                        navLinks.map((link) => (
                            <li key={link.href}>
                                <Link className='text-zinc-500' href={link.href}>{link.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
