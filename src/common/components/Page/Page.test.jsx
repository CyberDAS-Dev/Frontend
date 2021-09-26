import React from 'react'
import { render, act, screen } from '@/common/test-utils'
import Page from './Page'

it('вообще рендерится', () => {
    act(() => {
        render(<Page>Lol</Page>)
    })
    expect(screen.getByText('Lol')).toBeDefined()
})

it('оборачивает контент в card-body', () => {
    act(() => {
        render(<Page>Lol</Page>)
    })
    expect(screen.getByText('Lol').closest('div')).toHaveClass('card-body')
})

it('может зарендерить хэдер', () => {
    act(() => {
        render(<Page header="Kek123">Lol</Page>)
    })
    expect(screen.getByText('Kek123')).toBeDefined()
})

it('хэдер обернут в card-header', () => {
    act(() => {
        render(<Page header="Kek123">Lol</Page>)
    })
    expect(screen.getByText('Kek123').closest('div')).toHaveClass('card-header')
})

it('обернут в контейнер', () => {
    act(() => {
        render(<Page>Lol</Page>)
    })
    const container = screen.getByText('Lol').closest('.container')
    expect(container).toBeDefined()
    expect(container.children.length).toEqual(1)
})

it('имеет отступы', () => {
    act(() => {
        render(<Page>Lol</Page>)
    })
    const container = screen.getByText('Lol').closest('.card')
    expect(container).toHaveClass('mt-4 mb-5')
})
