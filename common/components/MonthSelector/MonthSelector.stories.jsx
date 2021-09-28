/* eslint-disable no-alert */
import React from 'react'
import MonthSelector from './MonthSelector'
import Description from './MonthSelector.description.md'

export default {
    title: 'MonthSelector',
    component: MonthSelector,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <MonthSelector {...args} />

export const Primary = Template.bind({})

Primary.args = {
    current: { year: 2019, month: 7 },
    dates: [
        { year: 2019, month: 7 },
        { year: 2019, month: 8 },
        { year: 2019, month: 9 },
        { year: 2019, month: 10 },
        { year: 2019, month: 6 },
    ],
    onChange: ({ year, month }) => alert(`${year} ${month}`),
    noYear: false,
}
