import React from 'react'
import card1 from '../assets/card1.png'
import Button from '../components/Button'

export default function Section2() {
  return (
    <main className="flex flex-col justify-between gap-4 mx-auto px-4 py-20 max-w-screen-xl min-h-screen">
      <div className='gap-12 grid grid-cols-2 max-md:grid-cols-1'>
        <div>
          <img src={card1} alt="" className='w-full h-full object-cover' />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 bg-section2 p-4">
          <h1 className='font-semibold text-4xl text-center max-sm:text-2xl'>
            Kitchen’s
            <br />
            “The heart of the Home”
          </h1>

          <p className='font-medium text-lg max-sm:text-base'>
            Let's face it, you work hard and spend a good amount of your free time in your kitchen. You deserve an amazing, clean, functional, and brilliant space. This interactive web guide will enable you to clearly communicate with your design professional what is most important to you for this new oasis.
          </p>
        </div>
      </div>

      <Button backLink="/" nextLink="/sec3" />
    </main>
  )
}