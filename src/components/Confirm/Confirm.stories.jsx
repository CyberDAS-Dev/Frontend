/* eslint-disable no-alert */
import React from 'react'
import Confirm from './Confirm'
import Description from './Confirm.description.md'

export default {
    title: 'Confirm',
    component: Confirm,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
            inlineStories: false,
        },
    },
}

const Template = (args) => <Confirm {...args} />

export const Primary = Template.bind({})

Primary.args = {
    title: 'Запись на заселение',
    text: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    enableEscape: false,
}
