import React from 'react'
import classes from './Input.module.css'


const Input = ({ name, label, inputData, ...props}) => {
  return (
    <div className={classes.container}>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} defaultValue={inputData?.name || ""} {...props} />
    </div>
  )
}

export default Input