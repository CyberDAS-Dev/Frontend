import React from 'react'
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
    onDateChange: (value) => alert(value),
    month: 7,
}
