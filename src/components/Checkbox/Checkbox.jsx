import React from 'react'
import s from './Checkbox.module.scss'

export default function Checkbox({ name, children, className, ...rest }) {
    return (
        <div className={`${s.wrapper} ${className || ''}`}>
            <input type="checkbox" {...rest} name={name} id={name} />
            <label htmlFor={name}>{children}</label>
        </div>
    )
}
