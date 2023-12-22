import React from 'react'

const Button = ({props}) => {
  return (
    <button className={`${props.class} py-2 px-4 font-semibold rounded shadow-md` }>{props.text} </button>
  )
}

export default Button