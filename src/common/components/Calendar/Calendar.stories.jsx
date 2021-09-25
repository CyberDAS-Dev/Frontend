/* eslint-disable no-alert */
import React from 'react'
import Calendar from './Calendar'
import Description from './Calendar.description.md'

export default {
    title: 'Calendar',
    component: Calendar,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <Calendar {...args} />

export const Primary = Template.bind({})

Primary.args = {}
