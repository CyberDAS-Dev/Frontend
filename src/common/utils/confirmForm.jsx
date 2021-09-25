import { confirmable, createConfirmation } from 'react-confirm'
import FormModal from '@/common/components/FormModal/FormModal'

const defaultConfirmation = createConfirmation(confirmable(FormModal))

export default function confirmForm(Form, options = {}) {
    return defaultConfirmation({ Form, ...options })
}
