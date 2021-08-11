import React from 'react'
import s from './Button.module.scss'

export default function Button({ children, variant, type, className, ...rest }) {
    return (
        <button
            type={type || 'button'}
            className={`${s[variant || 'primary']} ${className || ''}`}
            {...rest}
        >
            {children}
        </button>
    )
}
