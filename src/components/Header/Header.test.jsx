import React from 'react'
import { render, screen } from '@test-utils'
import Header from './Header'

test('header test', () => {
    render(<Header />, {
        initialState: { auth: { isAuth: false } },
    })

    expect(screen.getByText('Вход')).toBeInTheDocument()
})

test('header true', () => {
    render(<Header />, {
        initialState: { auth: { isAuth: true, name: 'John' } },
    })

    expect(screen.getByText('John')).toBeInTheDocument()
})
