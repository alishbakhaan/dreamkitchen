import React from 'react';
import card3 from '../assets/card3.png';
import Button from '../components/Button';

const Section3 = () => {
  return (
    <div className='bg-black text-white'>
      <main className='min-h-screen max-w-screen-xl  mx-auto px-4 py-8 flex flex-col gap-4 justify-between'>
        <h1 className='text-5xl font-bold max-sm:text-3xl max-md:text-4xl'>
          Our Unique Successful Process
        </h1>

        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12'>
          <div>
            <img src={card3} alt="" className='w-full h-full object-cover' />
          </div>

          <div className="bg-white text-primary flex items-center justify-center gap-4 flex-col p-4">
            <h2 className='text-2xl max-sm:text-lg text-center font-semibold'>
              How can we best help you?
            </h2>

            <p className='text-lg max-sm:text-base font-medium'>
              Over the years we have discovered the secret keys to ensure successful kitchen remodeling projects time after time.
            </p>

            <h2 className='text-2xl max-sm:text-lg text-center font-semibold'>
              Our focus is on understanding what you desire most for you new kitchen.
            </h2>

            <p className='text-lg max-sm:text-base font-medium'>
              Once we truly understand your current kitchen problems as well as your future kitchen dreams than we can see if our company is the best solution for solving your problems.
            </p>

            <h2 className='text-2xl max-sm:text-lg text-center font-semibold'>
              This determination is best made by us helping to problem solve.
            </h2>

            <p className='text-lg max-sm:text-base font-medium'>
              The better you explain your current problems the better we can work together to create the new space you have always dreamed of and deserve.
            </p>
          </div>
        </div>

        <Button backLink="/sec2" nextLink="/sec4" />
      </main>
    </div>
    // <div className='bg-black py-[28px] h-[100vh]'>
    //   <div className="px-2 font-medium text-6xl text-center text-white max-sm:text-3xl md:text-8xl">Our Unique Successful Process</div>
    //     <Card
    //       image1={card3}
    //       image2={card4}
    //       heading={"How can we best help you?"}
    //       para={"Over the years we have discovered the secret keys to ensure successful kitchen remodeling projects time after time."}
    //       heading1={"Our focus is on understanding what you desire most for you new kitchen."}
    //       para1={"Once we truly understand your current kitchen problems as well as your future kitchen dreams than we can see if our company is the best solution for solving your problems."}
    //       heading2={"This determination is best made by us helping to problem solve."}
    //       para2={"The better you explain your current problems the better we can work together to create the new space you have always dreamed of and deserve."}
    //       customStyles="py-9"
    //       customStyles1="opacity-95 text-emerald-600 md:text-xl"
    //     />
    //     <Button
    //     backLink="/sec2"
    //     nextLink="/sec4"
    //     />
    // </div>
  );
};

export default Section3;
