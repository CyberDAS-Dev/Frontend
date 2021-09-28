import React from 'react'
import { render, act, screen, fireEvent } from '@/common/test-utils'
import Slot from './Slot'

it('вообще рендерится', () => {
    act(() => {
        render(<Slot time="2019-07-12T12:50" />)
    })
    expect(screen.getByText('12:50')).toBeDefined()
})

it('умеет обрабатывать сокращенное время', () => {
    act(() => {
        render(<Slot time="12:50" />)
    })
    expect(screen.getByText('12:50')).toBeDefined()
})

it('оборачивает контент в кнопку', () => {
    act(() => {
        render(<Slot time="'2019-07-12T12:50" />)
    })
    expect(screen.getByText('12:50').closest('button')).toHaveClass('btn')
})

it('обёрнут в колонку', () => {
    act(() => {
        render(<Slot time="'2019-07-12T12:50" />)
    })
    expect(screen.getByText('12:50').closest('div')).toHaveClass('col')
})

it('растекается по всей ширине колонки и становится посередине', () => {
    act(() => {
        render(<Slot time="'2019-07-12T12:50" />)
    })
    const wrapper = screen.getByText('12:50').closest('div')
    expect(wrapper).toBeDefined()

    const btn = screen.getByText('12:50').closest('button')
    expect(btn).toBeDefined()

    expect(wrapper).toHaveClass('d-flex')
    expect(wrapper).toHaveClass('justify-content-center')
    expect(wrapper).toHaveClass('align-items-center')
    expect(btn).toHaveClass('w-100')
})

it('реагирует на нажатия', () => {
    const onClick = jest.fn()
    act(() => {
        render(<Slot time="'2019-07-12T12:50" onClick={onClick} />)
    })
    const btn = screen.getByText('12:50').closest('button')
    expect(btn).toBeDefined()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
})

it('в ответ на нажатия отправляет себя', () => {
    const onClick = jest.fn()
    act(() => {
        render(<Slot time="'2019-07-12T12:50" onClick={onClick} />)
    })
    const btn = screen.getByText('12:50').closest('button')
    expect(btn).toBeDefined()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledWith(btn)
})
