import React from 'react'
import s from './Input.module.scss'

export default function Input({ onChange, variant, type, className, placeholder }) {
    return (
        <input
            required
            className={`${s[variant]} ${className}`}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
