import React from 'react'
import Icon from '@/components/Icon/index'

export default function ButtonCard({
    service,
    heading,
    icon,
    onClick,
    disabled = false,
    currentSerivce,
}) {
    return (
        <a
            className={`w-100 btn p-2 ${
                currentSerivce === service ? 'btn-primary' : 'btn-outline-primary'
            } ${disabled ? 'disabled' : ''}`}
            href="#step-2"
            onClick={() => onClick(service)}
        >
            <div className="mb-2">
                <Icon name={icon} />
            </div>
            <h5>{heading}</h5>
        </a>
    )
}
