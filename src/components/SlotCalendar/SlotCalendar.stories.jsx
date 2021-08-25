/* eslint-disable no-alert */
import React from 'react'
import SlotCalendar from './SlotCalendar'
import Description from './SlotCalendar.description.md'

export default {
    title: 'SlotCalendar',
    component: SlotCalendar,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <SlotCalendar {...args} />

export const Primary = Template.bind({})

Primary.args = {
    value: new Date(),
    monthSlots: [
        {
            id: 1,
            time: new Date(),
            free: true,
        },
        {
            id: 2,
            time: new Date().setDate(new Date().getDate() + 1),
            free: true,
        },
        {
            id: 3,
            time: new Date().setDate(new Date().getDate() + 2),
            free: true,
        },
        {
            id: 4,
            time: new Date().setDate(new Date().getDate() - 1),
            free: true,
        },
        {
            id: 5,
            time: new Date().setDate(new Date().getDate() + 1),
            free: false,
        },
        {
            id: 6,
            time: new Date().setDate(new Date().getDate() + 3),
            free: false,
        },
    ],
    onChange: (event) => event,
}
