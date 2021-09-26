import React from 'react'
import { render, act, screen, fireEvent } from '@/common/test-utils'
import Modal from './Modal'

it('вообще рендерится', () => {
    act(() => {
        render(<Modal>Lol</Modal>)
    })
    expect(screen.getByText('Lol')).toBeDefined()
})

it('оборачивает контент в card-body', () => {
    act(() => {
        render(<Modal>Lol</Modal>)
    })
    expect(screen.getByText('Lol').closest('div')).toHaveClass('card-body')
})

it('может зарендерить заголовок', () => {
    act(() => {
        render(<Modal title="Kek123">Lol</Modal>)
    })
    expect(screen.getByText('Kek123')).toBeDefined()
})

it('заголовок обернут в card-header', () => {
    act(() => {
        render(<Modal title="Kek123">Lol</Modal>)
    })
    expect(screen.getByText('Kek123').closest('div')).toHaveClass('card-header')
})

it('умеет пропадать', () => {
    act(() => {
        render(
            <Modal show={false} header="Kek123">
                Lol
            </Modal>
        )
    })
    expect(() => screen.getByText('Kek123')).toThrowError('Unable to find')
    expect(() => screen.getByLabelText('Close')).toThrowError('Unable to find')
})

it('крестик есть и нажимается', () => {
    const handleClose = jest.fn()
    act(() => {
        render(
            <Modal proceed={handleClose} header="Kek123">
                Lol
            </Modal>
        )
    })
    const btn = screen.getByLabelText('Close')
    expect(btn).toBeDefined()
    fireEvent.click(btn)
    expect(handleClose).toHaveBeenCalledTimes(1)
})

it('может изменять лэйблы на кнопках', () => {
    const handleClose = jest.fn()
    act(() => {
        render(
            <Modal noCancel cancelLabel="Jka2" okLabel="Ok21" proceed={handleClose} header="Kek123">
                Lol
            </Modal>
        )
    })
    expect(() => screen.getByText('Jka2')).toBeDefined()
    expect(() => screen.getByText('Ok21')).toBeDefined()
})

it('может рендериться без кнопки отмены', () => {
    const handleClose = jest.fn()
    act(() => {
        render(
            <Modal noCancel cancelLabel="Jka2" okLabel="Ok21" proceed={handleClose} header="Kek123">
                Lol
            </Modal>
        )
    })
    expect(() => screen.getByText('Jka2')).toThrowError('Unable to find')
    expect(() => screen.getByText('Ok21')).toBeDefined()
})

it('может вставлять произвольный элемент в футер заместо кнопок', () => {
    const handleClose = jest.fn()
    act(() => {
        render(
            <Modal
                noCancel
                cancelLabel="Jka2"
                okLabel="Ok21"
                footer={<h1>Aezakmi</h1>}
                proceed={handleClose}
                header="Kek123"
            >
                Lol
            </Modal>
        )
    })
    expect(() => screen.getByText('Jka2')).toThrowError('Unable to find')
    expect(() => screen.getByText('Ok21')).toThrowError('Unable to find')
    expect(() => screen.getByText('Aezakmi')).toBeDefined()
    expect(() => screen.getByText('Aezakmi').closest('h1')).toBeDefined()
})
