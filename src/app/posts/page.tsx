import Link from 'next/link';
import React from 'react'

export default async function page() {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
            <ul>
                {
                    data.posts.map((post) => (
                        <li key={post.id} className='mb-4'>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
