import React from 'react'

import Button from './Button'

import ButtonDocumentation from './Button.mdx'

// 👇 This default export determines where your story goes in the story list
export default {
    title: 'Button',
    component: Button,
    parameters: {
        docs: {
            page: ButtonDocumentation,
        },
    },
}

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    variant: 'primary',
    type: 'button',
    children: 'Button',
}
