import PostList from '@/components/PostList';
import Link from 'next/link';
import React, { Suspense } from 'react'

export default async function page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // const response = await fetch("https://dummyjson.com/posts?limit=10");
    // const data = await response.json();
    return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
            <Suspense fallback="Loading...">
                <PostList />
            </Suspense>
        </main>
    )
}
