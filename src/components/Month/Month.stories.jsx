/* eslint-disable no-alert */
import React from 'react'
import Month from './Month'
import Description from './Month.description.md'

export default {
    title: 'Month',
    component: Month,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <Month {...args} />

export const Primary = Template.bind({})

Primary.args = {
    variant: 'primary',
    date: { year: 2019, month: 7 },
    onClick: ({ year, month }) => alert(`${year} ${month}`),
}
