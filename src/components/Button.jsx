import React from 'react'

const Button = ({ onClick, children, type  }) => {
  return (
    
    <button
      className="text-neutral-white bg-primary-marineBlue h-10 w-28 rounded-lg hover:bg-primary-purplishBlue"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>

  )
}

export default Button