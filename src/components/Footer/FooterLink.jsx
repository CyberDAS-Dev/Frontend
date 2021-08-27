import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink({ to, name, external }) {
    let link
    if (external) {
        link = (
            <a href={to} className="link-light d-block">
                {name}
            </a>
        )
    } else {
        link = (
            <Link to={to} className="link-light d-block">
                {name}
            </Link>
        )
    }

    return link
}
