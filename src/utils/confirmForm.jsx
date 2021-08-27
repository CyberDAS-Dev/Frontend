import { confirmable, createConfirmation } from 'react-confirm'
import FormModal from '@/components/FormModal/FormModal'

const defaultConfirmation = createConfirmation(confirmable(FormModal))

export default function confirmForm(Form, options = {}) {
    return defaultConfirmation({ Form, ...options })
}
