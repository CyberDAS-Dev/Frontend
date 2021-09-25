import React from 'react'
import Link from 'next/link'

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
            <Link href={to} className="link-light d-block">
                {name}
            </Link>
        )
    }

    return link
}
