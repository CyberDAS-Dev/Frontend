import React from 'react'
import Input from '@/components/Input/Input'
import s from './InputLabelHint.module.scss'

export default function InputLabelHint({ label, className, children, required, ...rest }) {
    return (
        <label className={`${s.label} ${className || ''}`}>
            {label}
            {required ? <span>*</span> : ''}
            <div>
                <Input
                    required={required}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                />
                <p>{children}</p>
            </div>
        </label>
    )
}
