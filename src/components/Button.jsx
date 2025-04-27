import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button 
    className='bg-teal-400 text-white px-4 py-2 capitalize rounded-lg text-sm hover:bg-teal-600'
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button