import React from 'react'
import { render, act, screen, fireEvent } from '@/test-utils'
import SlotList from './SlotList'

const slots = [
    { id: 1, time: '13:00', free: true },
    { id: 2, time: '13:10', free: true },
    { id: 3, time: '13:20', free: false },
    { id: 4, time: '13:30', free: true },
    { id: 5, time: '13:40', free: true },
    { id: 6, time: '13:50', free: true },
    { id: 7, time: '14:00', free: true },
    { id: 0, time: '14:20', free: true },
]

it('рендерит слоты', () => {
    act(() => {
        render(<SlotList slots={slots} />)
    })
    expect(screen.getByText('13:00')).toBeDefined()
    expect(screen.getByText('13:10')).toBeDefined()
})

it('не рендерит занятые слоты', () => {
    act(() => {
        render(<SlotList slots={slots} />)
    })
    expect(() => screen.getByText('13:20')).toThrowError('Unable to find')
})

it('обёрнут в строку', () => {
    act(() => {
        render(<SlotList slots={slots} />)
    })
    const row = screen.getByText('13:00').closest('.row')
    expect(row).toBeDefined()
})

it('рендерит все свободные слоты', () => {
    act(() => {
        render(<SlotList slots={slots} />)
    })
    const row = screen.getByText('13:00').closest('.row')
    expect(row.children.length).toEqual(7)
})

it('умеет менять максимальное число элементов в строке', () => {
    act(() => {
        render(<SlotList xs={3} slots={slots} />)
    })
    const row = screen.getByText('13:00').closest('.row')
    expect(row).toBeDefined()
    expect(row).toHaveClass('row-cols-3')
})

it('имеет gutters 2', () => {
    act(() => {
        render(<SlotList xs={3} slots={slots} />)
    })
    const row = screen.getByText('13:00').closest('.row')
    expect(row).toBeDefined()
    expect(row).toHaveClass('g-2')
})

it('правильно передает onClick', () => {
    const onClick = jest.fn()
    act(() => {
        render(<SlotList slots={slots} onClick={onClick} />)
    })
    const btn = screen.getByText('13:00').closest('button')
    expect(btn).toBeDefined()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledWith(btn)
})
