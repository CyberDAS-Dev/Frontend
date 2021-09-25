/* eslint-disable no-alert */
import React from 'react'
import Alert from './Alert'
import Description from './Alert.description.md'

export default {
    title: 'Alert',
    component: Alert,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
            inlineStories: false,
        },
    },
}

const Template = (args) => <Alert {...args} />

export const Primary = Template.bind({})

Primary.args = {
    title: 'Успех!',
    text: <p>Вы записались на 12:40</p>,
    proceed: (bool) => alert(bool),
    enableEscape: false,
}
