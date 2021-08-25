import React from 'react'
import FacultySelector from './FacultySelector'
import Description from './FacultySelector.description.md'

export default {
    title: 'FacultySelector',
    component: FacultySelector,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <FacultySelector {...args} />

export const Primary = Template.bind({})

Primary.args = {
    value: 8,
    onSelect: (value) => alert(value),
}
