/* eslint-disable no-alert */
import React from 'react'
import Slot from './Slot'
import Description from './Slot.description.md'

export default {
    title: 'Slot',
    component: Slot,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <Slot {...args} />

export const Primary = Template.bind({})

Primary.args = {
    id: 1,
    time: '2019-07-12T12:50',
    onClick: () => alert('Hello'),
}

export const Large = Template.bind({})

Large.args = {
    id: 1,
    size: 'lg',
    time: '2019-07-12T12:50',
    onClick: () => alert('Hello'),
}

export const Small = Template.bind({})

Small.args = {
    id: 1,
    size: 'sm',
    time: '2019-07-12T12:50',
    onClick: () => alert('Hello'),
}

export const Masked = Template.bind({})

Masked.args = {
    id: 1,
    size: 'sm',
    time: '2019-07-12T12:50',
    onClick: () => alert('Hello'),
    masked: true,
}
