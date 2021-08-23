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
        },
    },
}

const Template = (args) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
    show: false,
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
}

export const NoCancel = Template.bind({})

NoCancel.args = {
    show: false,
    title: 'Успех!',
    children: <p>Вы записались на 12:40</p>,
    proceed: (bool) => alert(bool),
    noCancel: true,
}

export const Large = Template.bind({})

Large.args = {
    show: false,
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    size: 'lg',
}

export const Centered = Template.bind({})

Centered.args = {
    show: false,
    title: 'Запись на заселение',
    children: <p>Вы хотите записаться на 12:40?</p>,
    proceed: (bool) => alert(bool),
    centered: true,
}

export const CustomFooter = Template.bind({})

CustomFooter.args = {
    show: false,
    title: 'Успех!',
    children: <p>Вы записались на 12:40</p>,
    proceed: (bool) => alert(bool),
    footer: <Col xs={{ span: 6, offset: 3 }}>* Произвольный контент</Col>,
}

export const Unclosable = Template.bind({})

Unclosable.args = {
    show: false,
    title: 'Подтверждение действий',
    children: <p>Вы уверены?</p>,
    proceed: (bool) => alert(bool),
    okLabel: 'Продолжить',
    cancelLabel: 'Отмена',
    closable: false,
}
