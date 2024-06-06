import React from 'react'
import sec4 from '../assets/sec4.png';
import sec5 from '../assets/sec5.png';
import sec6 from '../assets/sec6.png';
import Card2 from '../components/Card2';
import Button from '../components/Button';

const Section6 = () => {
  return (
    <div className='bg-black text-white'>
      <main className='min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-4 justify-between'>
      {/* <div className="px-2 pb-8 font-medium text-8xl text-center text-white max-[768px]:text-3xl max-[1024px]:text-5xl">Cost Range by type of Kitchen Remodel</div> */}
      <div>

      <h1 className='text-5xl font-bold max-sm:text-3xl max-md:text-4xl'>
        Cost Range by type of Kitchen Remodel
      </h1>

      <p className="mt-6 font-medium text-2xl max-sm:text-lg text-primary text-center">
        *All price ranges are estimated guesses / each house & kitchen project will vary
      </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-10 w-full *:flex-1 *:min-w-80 *:max-w-96">
        <Card2
          image={sec4}
          cardheading="MAJOR- Kitchen Remodel"
          cardpara="$15000-45000"
        />
        <Card2
          image={sec5}
          cardheading="MAJOR- Kitchen Remodel"
          cardpara="$45000-85,000"
          styles="bg-zinc-950"
        />
        <Card2
          image={sec6}
          cardheading="UPSCALE - Kitchen Remodel"
          cardpara="$85,000-165,000"
          styles="bg-white text-zinc-950"
        />
      </div>
      <div className="pt-11">
        <Button
          backLink="/sec7"
          nextLink="/sec9"
        />
      </div>
      </main>
    </div>
  )
}

export default Section6