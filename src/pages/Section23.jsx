import React from 'react'
import twoMan from "../assets/width_661.webp"
import speachBubble from "../assets/speach-bubble.png"
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Sec27 = () => {
  const divStyle = {
    height: '100vh',
    overflow: "hidden",
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${twoMan}) no-repeat center center/cover`,
  };

  return (
    <div style={divStyle}>
      <div className='bg-primary mt-10 ml-14 p-4 rounded-[30px] w-[300px] md:w-[600px] text-center text-white'> 
        <p className='font-semibold text-xl md:text-4xl'>COMMON CLIENT REMODELING PROBLEMS</p>
      </div>

     <div className='top-[20%] md:top-0 right-[50px] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-2 ml-4 w-[150px] font-semibold text-white text-xs md:text-xl' >“They never call me back”</h1>
        </div>
     </div>

     <div className='top-[30%] md:top-[30%] left-[25px] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-2 ml-4 w-[150px] font-semibold text-white text-xs md:text-xl' >“The project took too long”</h1>
        </div>
     </div>

     <div className='top-[40%] md:top-[20%] left-[20%] md:left-[40%] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-2 w-[130px] font-semibold text-center text-white text-xs md:text-xl' >“My house and yard were a mess”</h1>
        </div>
     </div>

     <div className='top-[50%] md:top-[30%] right-[10%] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-4 ml-4 w-[150px] font-semibold text-white text-xs md:text-xl' >“I ended up managing the project myself”</h1>
        </div>
     </div>

     <div className='top-[60%] md:top-[48%] left-[12%] md:left-[25%] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-4 ml-4 w-[150px] font-semibold text-white text-xs md:text-xl' >“So many hidden costs”</h1>
        </div>
     </div>

     <div className='top-[70%] md:top-[48%] left-[43%] absolute'>
        <div className='flex justify-center items-center size-40 md:size-56' style={{background: `url(${speachBubble}) no-repeat center center/cover`}}>
            <h1 className='mb-2 w-[130px] font-semibold text-center text-white text-xs md:text-xl' >“I was not given a schedule”</h1>
        </div>
     </div>
    <div className="bottom-4 left-1/2 absolute -translate-x-1/2">
        <Button
          backLink="/sec22"
          nextLink="/sec24"
        />
      </div>
    </div>
  )
}

export default Sec27
