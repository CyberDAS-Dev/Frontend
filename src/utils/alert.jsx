import { confirmable, createConfirmation } from 'react-confirm'
import Alert from '@/components/Alert/Alert'

const defaultAlert = createConfirmation(confirmable(Alert))

export default function alert(text, options = {}) {
    return defaultAlert({ text, ...options })
}
