import { confirmable, createConfirmation } from 'react-confirm'
import Alert from '@/common/components/Alert'

const defaultAlert = createConfirmation(confirmable(Alert))

export default function alert(text, options = {}) {
    return defaultAlert({ text, ...options })
}
