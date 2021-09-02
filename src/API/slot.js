/* eslint-disable class-methods-use-this */
import http from '@/API/http'
import { errorAlert } from './errors'

class SlotDataService {
    getAll(queue) {
        return http.simpleGet(`/queues/${queue}/slots`)
    }

    get(queue, id) {
        return http.simpleGet(`/queues/${queue}/slots/${id}`)
    }

    reserve(queue, id, data) {
        return http.post(`/queues/${queue}/slots/${id}/reserve?next=cancel`, data).catch((err) => {
            const statusCode = err.response?.status
            if (statusCode === 403) {
                errorAlert(err.response.data.description)
            } else {
                err.handleGlobally()
            }
        })
    }
}

export default new SlotDataService()
