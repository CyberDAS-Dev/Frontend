/* eslint-disable no-alert */
import React from 'react'
import FormModal from './FormModal'
import Description from './FormModal.description.md'
import FasttrackForm from '@/modules/queue/forms/QueueForm'

export default {
    title: 'FormModal',
    component: FormModal,
    parameters: {
        docs: {
            description: {
                component: Description,
            },
            inlineStories: false,
        },
    },
}

const Template = (args) => <FormModal {...args} />

export const Primary = Template.bind({})

Primary.args = {
    Form: FasttrackForm,
    proceed: (values) => {
        if (typeof values === 'object') {
            alert(JSON.stringify(values))
        } else {
            alert(values)
        }
    },
    title: 'Ваши данные',
}
