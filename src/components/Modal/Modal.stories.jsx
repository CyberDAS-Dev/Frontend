/* eslint-disable no-alert */
import React from 'react'
import { Col } from 'react-bootstrap'
import Modal from './Modal'
import Description from './Modal.description.md'

export default {
    title: 'Modal',
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
            inlineStories: false,
        },
    },
}

const Template = (args) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    enableEscape: false,
}

export const NoCancel = Template.bind({})

NoCancel.args = {
    title: 'Успех!',
    children: <p>Вы записались на 12:40</p>,
    proceed: (bool) => alert(bool),
    noCancel: true,
    enableEscape: false,
}

export const Large = Template.bind({})

Large.args = {
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    size: 'lg',
    enableEscape: false,
}

export const Centered = Template.bind({})

Centered.args = {
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    centered: true,
    enableEscape: false,
}

export const CustomFooter = Template.bind({})

CustomFooter.args = {
    title: 'Успех!',
    children: <p>Вы записались на 12:40</p>,
    proceed: (bool) => alert(bool),
    footer: <Col xs={{ span: 6, offset: 3 }}>* Произвольный контент</Col>,
    enableEscape: false,
}

export const Unclosable = Template.bind({})

Unclosable.args = {
    title: 'Подтверждение действий',
    children: <p>Вы уверены?</p>,
    proceed: (bool) => alert(bool),
    okLabel: 'Продолжить',
    cancelLabel: 'Отмена',
    closable: false,
    enableEscape: false,
}
