import React from 'react'
import inputStyles from '@/components/Input/Input.module.scss'
import s from './Select.module.scss'

export default function Select({
    required,
    className,
    placeholder,
    children,
    label,
    hint,
    name,
    ...rest
}) {
    return (
        <label className={`${s.label} ${className || ''}`}>
            {label}
            {required ? <span>*</span> : ''}
            <div>
                <select
                    className={`${inputStyles.primary} ${s.select}`}
                    required={required}
                    name={name}
                    {...rest}
                >
                    <option value="" disabled selected hidden>
                        {placeholder}
                    </option>
                    {children}
                </select>
                <p>{hint}</p>
            </div>
        </label>
    )
}
