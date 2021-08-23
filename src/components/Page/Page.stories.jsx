import React from 'react'
import Page from './Page'
import Description from './Page.description.md'

export default {
    title: 'Page',
    component: Page,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <Page {...args} />

export const Primary = Template.bind({})

Primary.args = {
    header: 'Страница',
    children: (
        <div>
            <h4>Заголовок</h4>
            <h5>И поменьше</h5>
        </div>
    ),
}
