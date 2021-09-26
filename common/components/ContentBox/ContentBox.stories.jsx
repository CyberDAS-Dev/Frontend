import React from 'react'
import ContentBox from './ContentBox'
import Description from './ContentBox.description.md'

export default {
    title: 'ContentBox',
    component: ContentBox,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
        },
    },
}

const Template = (args) => <ContentBox {...args} />

export const Primary = Template.bind({})

Primary.args = {
    show: true,
    header: 'Как дела?',
    closable: false,
    hidden: false,
    children: 'Сюда можно передать любой элемент Реакта',
}

export const Closable = Template.bind({})

Closable.args = {
    show: true,
    header: 'Это снова я',
    closable: true,
    hidden: false,
    children: <h5>У меня есть крестик</h5>,
    // eslint-disable-next-line no-alert
    onClose: () => alert('Не скрывай меня :('),
}

export const Hidden = Template.bind({})

Hidden.args = {
    show: true,
    header: 'Я спрятался',
    closable: false,
    hidden: true,
    children: <h3>И меня ты не увидишь</h3>,
}
