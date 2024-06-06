import React from 'react'
import frame from "../assets/timeFrame.webp";
import { Link } from 'react-router-dom';
 

const FdaProcess = () => {
  return (
<>
  <div className='bg-[#54a96a]'>
    <div className=''>
      <div className='flex justify-center items-center h-screen'>
        <div
          className="bg-cover bg-center w-[70vw] h-[80vh] relative"
          style={{
            backgroundImage: `url('https://media.canva.com/v2/image-resize/format:PNG/height:711/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FwB9SY%2FMAGCPcwB9SY%2F1%2Fp.png/watermark:F/width:725?csig=AAAAAAAAAAAAAAAAAAAAAFOoP9f7dqD49whZAr29Q2_fAx5U1CH44LFvuER9VgGa&exp=1717243345&osig=AAAAAAAAAAAAAAAAAAAAALgRIvqfb5_bt9YMuafGdLilh0xgjJ63uQNYbokYAlXf&signer=media-rpc&x-canva-quality=screen')`
          }}
        >
        
          {/* Overlay layer */}
          <div className="absolute inset-0 bg-[#54a96a] opacity-50"></div>
      
          {/* Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <div>
          <p className='text-white w-[700px] text-center font-semibold text-3xl max-[1000px]:text-2xl max-[850px]:text-xl max-[1000px]:w-[550px] max-[850px]:w-[450px] max-[650px]:w-[350px] max-[520px]:w-[250px]'>Thank you for reaching out, one of our specialized feasibility- discovery - design representatives will reach out to discuss setting up your individualized F-D-A process....</p>
          </div>

            <div className='bg-[rgb(0,0,0)] mt-5 p-3 w-[550px] max-[900px]:w-[450px]  max-[700px]:w-[350px] max-[550px]:w-[300px]'>
          <p className='text-[#fff]  text-center font-semibold text-xl'>AF-D-A Process (Feasibility-Discovery/Design Agreement)can range between $300-800 depending on yourneeds our Specialist will help determine the appropriate plan for you</p>
              
         </div>
          </div>
       <div className='flex justify-center '>
       <div className='absolute bottom-0  flex gap-14 pb-5'>
        <div className='flex gap-14 max-[600px]:mt-5'>
                    <Link to={"/sec21"}><button className='text-xl bg-[#c4c9c6] text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'><span>{"<"}</span> Back</button></Link>
                    <Link to={"/sec23"}><button className='text-xl bg-[#000] text-white p-2 px-5 hover:bg-[#408152] transition-all rounded-full'>Next<span>{">"}</span></button></Link>
                </div>
        </div>
       </div>
        
        </div>
        
      </div>

   
    </div>

    
  </div>
</>







  )
}

export default FdaProcess




{/* <div className='relative'>
<div className='bg-[#54a96a] z-10 opacity-80 absolute inset-0'></div>
<div className='flex justify-center  items-center h-screen'>
  <img
    style={{
      width: '70vw',
      height: '80vh',
      objectFit: 'cover',
      display: 'block'
    }}
    src={frame}
    alt=""
  />

</div>
<p className='text-[#ffff] font-bold text-3xl' >A few more Questions to help us better understand details about your projects? </p>
</div> */}


{/* <div className="absolute inset-0 flex justify-center items-center text-white text-5xl font-bold">
<div className=''>
<p className='w-[800px] flex justify-center'>A few more Questions to help us better understand details about your projects? </p>

</div>
</div> */}





{/* <div className='text-[#fff] pt-5 flex gap-2 items-center'>
<p className='font-semibold'>Time Frame:</p>
<div className='border p-1 rounded border-[#474747]'>
<input type="text " className='w-80' />
</div>
</div>
<div className='text-[#fff] flex gap-2 items-center'>
<p className='font-semibold'>Budget:</p>
<div className='border p-1 rounded border-[#474747]'>
<input type="text " className='w-80' />
</div>
</div>
<div className='text-[#fff] flex gap-2 items-center pb-5'>
<p className='font-semibold'>Others:</p>
<div className='border p-1 rounded border-[#474747]'>
<input type="text " className='w-80' />
</div>
</div> */}