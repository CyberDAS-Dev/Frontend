import React from 'react'
import s from './Button.module.scss'

export default function Button({ children, type }) {
    return (
        <button type={type || 'button'} className={s.button}>
            {children}
        </button>
    )
}
