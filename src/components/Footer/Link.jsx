import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink({ to, name, external }) {
    let link
    if (external) {
        link = (
            <a href={to} className="link-primary p-1 mb-1 d-block">
                <small>{name}</small>
            </a>
        )
    } else {
        link = (
            <Link to={to} className="link-primary p-1 mb-1 d-block">
                <small>{name}</small>
            </Link>
        )
    }

    return link
}
