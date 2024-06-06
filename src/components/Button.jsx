import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const Button = ({ backLink, nextLink = null }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-10 btn">
      <button
        onClick={() => navigate(backLink)}
        className="flex justify-center items-center gap-2 bg-gray-300 rounded-full py-4 px-8 font-normal text-3xl max-sm:text-lg max-md:text-xl text-black text-center"
      >
        <MdArrowBackIosNew size={24} />
        <span>{nextLink ? 'Back': 'The end'}</span>
      </button>

      {nextLink &&
        <button onClick={() => navigate(nextLink)} className="flex justify-center items-center gap-2 bg-primary rounded-full py-4 px-8 font-normal text-3xl max-sm:text-lg max-md:text-xl text-black text-center">
          <span>Next</span>
          <MdArrowForwardIos size={24} />
        </button>
      }
    </div>
  )
}

export default Button