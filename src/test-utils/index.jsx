import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom/extend-expect'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import authReducer from '../store/auth/slice'

function render(
    ui,
    {
        initialState = {},
        store = configureStore({
            reducer: {
                auth: authReducer
            },
            preloadedState: initialState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return (
            <MemoryRouter>
                <Provider store={store}>{children}</Provider>
            </MemoryRouter>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
