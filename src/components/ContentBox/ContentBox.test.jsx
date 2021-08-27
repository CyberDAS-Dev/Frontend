import React from 'react'
import { render, act, screen, fireEvent } from '@/test-utils'
import ContentBox from './ContentBox'

it('вообще рендерится', () => {
    act(() => {
        render(<ContentBox>Lol</ContentBox>)
    })
    expect(screen.getByText('Lol')).toBeDefined()
})

it('оборачивает контент в card-body', () => {
    act(() => {
        render(<ContentBox>Lol</ContentBox>)
    })
    expect(screen.getByText('Lol').closest('div')).toHaveClass('card-body')
})

it('может зарендерить хэдер', () => {
    act(() => {
        render(<ContentBox header="Kek123">Lol</ContentBox>)
    })
    expect(screen.getByText('Kek123')).toBeDefined()
})

it('хэдер обернут в card-header', () => {
    act(() => {
        render(<ContentBox header="Kek123">Lol</ContentBox>)
    })
    expect(screen.getByText('Kek123').closest('div')).toHaveClass('card-header')
})

it('может рендерится с крестиком', () => {
    act(() => {
        render(
            <ContentBox closable header="Kek123">
                Lol
            </ContentBox>
        )
    })
    const cardHeader = screen.getByText('Kek123').closest('div')
    expect(cardHeader.children.length).toEqual(2)
    expect(cardHeader.children[1]).toHaveClass('btn-close')
    expect(cardHeader.children[1]).toEqual(screen.getByLabelText('Close'))
})

it('рендерит крестик в правом верхнем углу', () => {
    act(() => {
        render(
            <ContentBox closable header="Kek123">
                Lol
            </ContentBox>
        )
    })
    const cardHeader = screen.getByText('Kek123').closest('div')
    expect(cardHeader).toHaveClass('d-flex')
    expect(cardHeader.children[1]).toHaveClass('ms-auto')
})

it('может рендерится без крестика', () => {
    act(() => {
        render(<ContentBox header="Kek123">Lol</ContentBox>)
    })
    const cardHeader = screen.getByText('Kek123').closest('div')
    expect(cardHeader.children.length).toEqual(1)
    expect(() => screen.getByLabelText('Close')).toThrowError('Unable to find a label')
})

it('может прятать контент', () => {
    act(() => {
        render(
            <ContentBox hidden header="Kek123">
                Lol
            </ContentBox>
        )
    })
    expect(() => screen.getByText('Lol')).toThrowError('Unable to find an element')
    expect(screen.getByText('Kek123')).toHaveClass('text-muted')
})

it('эмитит эвент при закрытии', () => {
    const handleClick = jest.fn()
    act(() => {
        render(
            <ContentBox closable onClose={handleClick} header="Kek123">
                Lol
            </ContentBox>
        )
    })
    fireEvent.click(screen.getByLabelText('Close'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})
