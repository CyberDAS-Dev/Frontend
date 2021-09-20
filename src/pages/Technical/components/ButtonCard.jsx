import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Icon from '@/components/Icon/index'

export default function ButtonCard({ service, heading, icon, onClick, alt }) {
    return (
        <Button
            className="w-100 p-0 align-items-stretch"
            variant="outline-primary"
            onClick={() => onClick(service)}
        >
            <div className="py-2">
                <Icon name={icon} />
            </div>
            <Card.Body>
                <Card.Title className="m-0">{heading}</Card.Title>
            </Card.Body>
        </Button>
    )
}
