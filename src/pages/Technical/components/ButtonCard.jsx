import React from 'react'
import { Card, Button } from 'react-bootstrap'
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
        <Button
            className="w-100 btn p-2"
            variant={currentSerivce === service ? 'primary' : 'outline-primary'}
            onClick={() => onClick(service)}
            disabled={disabled}
        >
            <div className="mb-2">
                <Icon name={icon} />
            </div>
            <h5>{heading}</h5>
        </Button>
    )
}
