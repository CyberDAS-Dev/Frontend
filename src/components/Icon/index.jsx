import React from 'react'
import ICONS from './ICONS'

export default function Icon(props) {
    const { name } = props

    return <>{ICONS[name]}</>
}
