import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const Button = (props) => {
  return (
    <button>
      <div className="flex justify-center items-center border-2 rounded-full border-gray-700 opacity-80 hover:bg-gray-100" style={{borderColor:props.bordercolor}}> 
        <div className="flex gap-x-2 px-3 py-1 justify-center items-center ">
          <Link
            to={props.href} style={{color: props.color}}
            className="text-sm  gap-0 font-semibold text-gray-700 0 py-2 hover:text-gray-400"
          >
            {props.name}
          </Link>
        </div>
      </div>
    </button>
  );
}

export default Button
