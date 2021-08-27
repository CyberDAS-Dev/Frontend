/* eslint-disable no-alert */
import React from 'react'
import { toDatetime } from '@/utils/dateLib'
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
    onChange: (event) => event,
    dailyClasses: Object.fromEntries([
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 1))), 'busy_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 2))), 'hot_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 3))), 'available_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 4))), 'available_tile'],
    ]),
    disabledDates: [toDatetime(new Date(new Date().setDate(new Date().getDate() + 5)))],
}
