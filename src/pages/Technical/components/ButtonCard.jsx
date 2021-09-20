import React from 'react'
import { Card } from 'react-bootstrap'

export default function ButtonCard({ service, heading, icon, onClick, alt }) {
    return (
        <button
            className="w-100 p-0 align-items-stretch btn btn-primary"
            onClick={() => onClick(service)}
        >
            <div className="py-2">
                <Card.Img className="w-auto" variant="top" alt={alt} src={icon} />
            </div>
            <Card.Body className="bg-dark">
                <Card.Title className="m-0">{heading}</Card.Title>
            </Card.Body>
        </button>
    )
}
