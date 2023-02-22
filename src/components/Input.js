import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input type={props.type} placeholder={props.initial}/>
    </div>
  )
}

export default Input