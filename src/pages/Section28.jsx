import React from 'react'
import Button from '../components/Button'

const Section28 = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-black w-[100%] min-h-screen text-white'>
                <div className='flex flex-col justify-center items-center gap-6 p-4'>
                    <div className='bg-[#ff3131] px-8 p-3 rounded-3xl'>
                        <h1 className='font-bold text-5xl'>WHY A RENEGADE</h1>
                    </div>

                    <div className='flex flex-col gap-6 bg-[#ff3131] px-8 py-8 rounded-xl w-full max-w-2xl text-center'>
                        <p className='font-bold text-3xl'>Thank you for reaching out to a Renegade</p>
                        <p className='font-bold text-3xl'>we are different by design you work hard</p>
                        <p className='font-bold text-3xl'>&</p>
                        <p className='font-bold text-3xl'>its time you treated yourself to the best remodeling experience </p>
                    </div>

                    <Button backLink="/sec27" />
                </div>

            </div>
        </>
    )
}

export default Section28