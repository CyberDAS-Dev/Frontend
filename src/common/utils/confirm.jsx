import { confirmable, createConfirmation } from 'react-confirm'
import Confirm from '@/common/components/Confirm/Confirm'

const defaultConfirmation = createConfirmation(confirmable(Confirm))

export default function confirm(text, options = {}) {
    return defaultConfirmation({ text, ...options })
}
