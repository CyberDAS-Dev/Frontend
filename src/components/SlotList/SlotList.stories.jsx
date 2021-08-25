/* eslint-disable no-alert */
import React from 'react'
import SlotList from './SlotList'
import NamedSlotList from './NamedSlotList'
import Description from './SlotList.description.md'

export default {
    title: 'SlotList',
    component: SlotList,
    subcomponents: { NamedSlotList },
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <SlotList {...args} />

export const Primary = Template.bind({})

Primary.args = {
    slots: [
        { id: 1, time: '13:00', free: true },
        { id: 2, time: '13:10', free: true },
        { id: 3, time: '13:20', free: false },
        { id: 4, time: '13:30', free: true },
        { id: 5, time: '13:40', free: true },
        { id: 6, time: '13:50', free: true },
        { id: 7, time: '14:00', free: true },
        { id: 0, time: '14:20', free: true },
    ],
    sm: 3,
    lg: 4,
    onClick: () => alert('Hello'),
}

const NamedTemplate = (args) => <NamedSlotList {...args} />

export const Named = NamedTemplate.bind({})

Named.args = {
    slots: [
        { id: 1, time: '13:00', free: true },
        { id: 2, time: '13:10', free: true },
        { id: 3, time: '13:20', free: false },
        { id: 4, time: '13:30', free: true },
        { id: 5, time: '13:40', free: true },
        { id: 6, time: '13:50', free: true },
        { id: 7, time: '14:00', free: true },
        { id: 0, time: '14:20', free: true },
    ],
    sm: 3,
    lg: 4,
    onClick: () => alert('Hello'),
}
