import React from 'react'
import Link from 'next/link'

export default function LinkContainer(props) {
    const { children, className, ...linkProps } = props
    return (
        <Link {...linkProps} passHref>
            <a href="passRef" className={className}>
                {children}
            </a>
        </Link>
    )
}
