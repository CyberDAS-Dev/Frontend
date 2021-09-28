import React from 'react'
import { render, act, screen, fireEvent } from '@/common/test-utils'
import NamedSlotList from './NamedSlotList'

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

it('рендерит надпись', () => {
    act(() => {
        render(<NamedSlotList slots={slots} />)
    })
    expect(screen.getByText('Запись')).toBeDefined()
})

it('рендерит надпись во всю ширину и по центру', () => {
    act(() => {
        render(<NamedSlotList slots={slots} />)
    })
    const col = screen.getByText('Запись').closest('div')
    expect(col).toBeDefined()
    expect(col).toHaveClass('col-12')
    expect(col).toHaveClass('text-center')
})

it('показывает слоты', () => {
    act(() => {
        render(<NamedSlotList slots={slots} />)
    })
    expect(screen.getByText('13:00')).toBeDefined()
})

it('в случае отсутствия слотов показывает надпись', () => {
    act(() => {
        render(<NamedSlotList noItemsText="asd122xcz" slots={[]} />)
    })
    expect(screen.getByText('asd122xcz')).toBeDefined()
})

it('надпись правильно расположена и отцентрована', () => {
    act(() => {
        render(<NamedSlotList noItemsText="asd122xcz" slots={[]} />)
    })
    const col = screen.getByText('asd122xcz').closest('div')
    expect(col).toBeDefined()
    expect(col).toHaveClass('col-12')
    expect(col).toHaveClass('text-center')
})

it('у надписи правильные gutters', () => {
    act(() => {
        render(<NamedSlotList noItemsText="asd122xcz" slots={[]} />)
    })
    const row = screen.getByText('asd122xcz').closest('.row')
    expect(row).toHaveClass('g-2')
})

it('правильно передает onClick', () => {
    const onClick = jest.fn()
    act(() => {
        render(<NamedSlotList slots={slots} onClick={onClick} />)
    })
    const btn = screen.getByText('13:00').closest('button')
    expect(btn).toBeDefined()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledWith(btn)
})
