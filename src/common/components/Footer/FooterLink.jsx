import React from 'react'
import LinkContainer from '@/common/components/LinkContainer/LinkContainer'

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
            <LinkContainer href={to} className="link-light d-block">
                {name}
            </LinkContainer>
        )
    }

    return link
}
