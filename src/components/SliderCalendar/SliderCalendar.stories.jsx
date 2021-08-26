import React from 'react'
import { toDatetime } from '@/utils/dateLib'
import SliderCalendar from './SliderCalendar'
import Description from './SliderCalendar.description.md'

export default {
    title: 'SliderCalendar',
    component: SliderCalendar,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <SliderCalendar {...args} />

export const Primary = Template.bind({})

Primary.args = {
    value: new Date(),
    onDateChange: (event) => event,
    dailyClasses: Object.fromEntries([
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 1))), 'busy_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 2))), 'hot_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 3))), 'available_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 4))), 'available_tile'],
    ]),
}
