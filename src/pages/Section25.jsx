import React from 'react'
import Button from '../components/Button'

const Section25 = () => {
    return (
        <div className='flex flex-col justify-center min-h-screen _sec_10_main'>
            <div className='mx-auto p-4 container'>
                <h1 className='bg-primary p-4 lg:p-8 rounded-2xl xl:w-7/12 font-bold text-4xl text-white lg:text-6xl uppercase'>How to avoid the most common contractor & homeowner issues</h1>
                <div className='mt-5'>
                <Button
                    backLink="/sec24"
                    nextLink="/sec26"
                />
            </div>
            </div>
        </div>
    )
}

export default Section25