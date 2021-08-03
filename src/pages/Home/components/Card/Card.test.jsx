import React from 'react'
import { render, screen } from '@/test-utils'
import Card from './Card'

test('card render test', () => {
    render(<Card order={0} heading="Вызов технических служб" />)

    expect(screen.getByText('Вызов технических служб')).toBeInTheDocument()
})

test('card primary styles', () => {
    render(<Card isPrimary order={0} heading="Вызов технических служб" />)
    const header = screen.getByText('Вызов технических служб')
    const headerEl = document.querySelector(`.${header.className}`)
    const style = window.getComputedStyle(headerEl)

    expect(header).toBeInTheDocument()
    expect(style.color).toBe('#fff')
})
