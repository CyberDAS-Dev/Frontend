import React from 'react'

import Checkbox from './Checkbox'

// 👇 This default export determines where your story goes in the story list
export default {
    title: 'Checkbox',
    component: Checkbox,
}

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
    name: 'checkbox',
    children: 'Label',
}
