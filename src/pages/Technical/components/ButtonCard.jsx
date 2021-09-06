import React from 'react'
import Image from 'react-bootstrap/Image'

export default function ButtonCard({ service, heading, icon, onClick }) {
    return (
        <button
            className="d-flex flex-column border rounded w-100 align-items-stretch bg-primary p-0"
            type="button"
            onClick={() => onClick(service)}
        >
            <div className="py-2 ">
                <Image src={icon} />
            </div>
            <div className="bg-dark py-2">
                <h5 className="m-0 text-white">{heading}</h5>
            </div>
        </button>
    )
}
