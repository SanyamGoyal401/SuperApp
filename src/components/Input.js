import React, { useState } from 'react'

const Input = ({type, initial, data, setData}) => {
  const [val, setVal] = useState(data[initial])
  return (
    <div>
        <input type={type} placeholder={initial} value = {val} onChange = {(e) =>{
          setVal(e.target.value)
          data[initial] = e.target.value;
          setData(data);
        }}/>
    </div>
  )
}

export default Input