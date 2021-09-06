import React from 'react'
import { Card } from 'react-bootstrap'

export default function ButtonCard({ service, heading, icon, onClick }) {
    return (
        <Card
            className="w-100 p-0 align-items-stretch"
            text="white"
            bg="primary"
            as="button"
            onClick={() => onClick(service)}
        >
            <div className="py-2">
                <Card.Img className="w-auto" variant="top" src={icon} />
            </div>
            <Card.Body className="bg-dark">
                <Card.Title className="m-0">{heading}</Card.Title>
            </Card.Body>
        </Card>
    )
}
