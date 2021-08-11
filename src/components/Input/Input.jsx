import React from 'react'
import s from './Input.module.scss'

export default function Input({ variant, className, ...rest }) {
    return <input className={`${s[variant || 'primary']} ${className || ''}`} {...rest} />
}
