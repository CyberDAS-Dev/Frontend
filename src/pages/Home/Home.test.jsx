import React from 'react'
import { render, screen } from '@/test-utils'
import Home from './Home'

test('home render test', () => {
    render(<Home />)

    expect(screen.getByText('Общежитее стало доступнее!')).toBeInTheDocument()
})
