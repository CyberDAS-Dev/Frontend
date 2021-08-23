import { confirmable, createConfirmation } from 'react-confirm'
import Confirm from '@/components/Confirm/Confirm'

const defaultConfirmation = createConfirmation(confirmable(Confirm))

export default function confirm(confirmation, options = {}) {
    return defaultConfirmation({ confirmation, ...options })
}
