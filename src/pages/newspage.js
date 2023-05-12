import dynamic from 'next/dynamic'
import React from 'react'
const NewsComponent = dynamic(() => import("../components/newsComponent"))

const NewsPage = () => {
    return (
        <div className='text-center'>
            <NewsComponent />

        </div>
    )
}

export default NewsPage
