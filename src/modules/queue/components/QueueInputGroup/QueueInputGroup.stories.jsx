/* eslint-disable no-alert */
import React from 'react'
import { toDate, toDatetime } from '@/utils/dateLib'
import QueueInputGroup from './QueueInputGroup'
import Description from './QueueInputGroup.description.md'

export default {
    title: 'QueueInputGroup',
    component: QueueInputGroup,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <QueueInputGroup {...args} />

export const Primary = Template.bind({})

Primary.args = {
    slotMatrix: Object.fromEntries([
        [
            toDatetime(new Date()),
            [
                {
                    id: 0,
                    time: `${toDate(new Date())}T09:20:00`,
                    free: true,
                },
                {
                    id: 1,
                    time: `${toDate(new Date())}T09:25:00`,
                    free: true,
                },
            ],
        ],
        [
            toDatetime(new Date(new Date().setDate(new Date().getDate() + 1))),
            [
                {
                    id: 2,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 1))
                    )}T09:20:00`,
                    free: true,
                },
                {
                    id: 3,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 1))
                    )}T09:25:00`,
                    free: true,
                },
            ],
        ],
        [
            toDatetime(new Date(new Date().setDate(new Date().getDate() + 2))),
            [
                {
                    id: 4,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 2))
                    )}T09:40:00`,
                    free: true,
                },
                {
                    id: 5,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 2))
                    )}T12:25:00`,
                    free: true,
                },
            ],
        ],
        [
            toDatetime(new Date(new Date().setDate(new Date().getDate() + 3))),
            [
                {
                    id: 6,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 3))
                    )}T11:20:00`,
                    free: true,
                },
                {
                    id: 7,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 3))
                    )}T14:45:00`,
                    free: true,
                },
            ],
        ],
        [
            toDatetime(new Date(new Date().setDate(new Date().getDate() + 4))),
            [
                {
                    id: 8,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 4))
                    )}T19:20:00`,
                    free: true,
                },
                {
                    id: 9,
                    time: `${toDate(
                        new Date(new Date().setDate(new Date().getDate() + 4))
                    )}T19:25:00`,
                    free: true,
                },
            ],
        ],
        [
            toDatetime(new Date(new Date().setMonth(new Date().getMonth() + 1))),
            [
                {
                    id: 9,
                    time: `${toDate(
                        new Date(new Date().setMonth(new Date().getMonth() + 1))
                    )}T09:40:00`,
                    free: true,
                },
                {
                    id: 10,
                    time: `${toDate(
                        new Date(new Date().setMonth(new Date().getMonth() + 1))
                    )}T09:45:00`,
                    free: true,
                },
            ],
        ],
    ]),

    dailyClasses: Object.fromEntries([
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 1))), 'available_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 2))), 'hot_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 3))), 'available_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 4))), 'available_tile'],
        [toDatetime(new Date(new Date().setDate(new Date().getDate() + 5))), 'busy_tile'],
        [toDatetime(new Date(new Date().setMonth(new Date().getMonth() + 1))), 'available_tile'],
    ]),
    disabledDates: [toDatetime(new Date())],
    onSlotClick: (slot) => alert(slot.id, slot.time),
    getNoItemsText: (date) => `${date}`,
}
