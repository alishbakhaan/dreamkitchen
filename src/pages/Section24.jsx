import React from 'react';

import bgImg from "../assets/complaint.webp";
import Button from '../components/Button';

let cards = [
    "“Workers failing to show up”",
    "“Not taking the time to the job right the first time”",
    "“Not litening to or understanding our requests”",
    "“Leaving a mess”"
]

const Section24 = () => {
    return (
        <div className='p-4 w-full min-h-screen _sec_9_main' >

            <div className='mx-auto pt-10 container'>
                <h1 className='bg-black p-6 rounded-2xl xl:w-6/12 font-bold text-2xl text-center text-white md:text-5xl uppercase'>top client remodeling complaints about the contractor they hired</h1>

                <div className='gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-14'>
                    {
                        cards?.map((item, index) => {
                            return (
                                <div key={index} className='relative flex flex-col justify-center items-center min-h-80'>
                                    <img alt='' src={bgImg} className='top-0 left-0 absolute w-full h-full filter object-contain' />
                                    <h1 className='z-10 mx-auto sm:px-8 md:px-5 lg:px-8 xl:px-14 2xl:px-20 pt-16 w-6/12 sm:w-full font-bold text-[14px] text-center sm:text-xl md:text-[13px] lg:text-lg xl:text-xl'>{item}</h1>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='mt-5'>


                <Button
                    backLink="/sec23"
                    nextLink="/sec25"
                />
            </div>
        </div>
    )
}

export default Section24