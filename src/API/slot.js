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
        return http.post(`/queues/${queue}/slots/${id}/reserve`, data).catch((err) => {
            const statusCode = err.response?.status
            if (statusCode === 403) {
                errorAlert(
                    'Этот слот уже занят или истёк или, возможно, вы уже записывались в эту очередь.'
                )
            } else {
                err.handleGlobally()
            }
        })
    }

    fasttrack(queue, id, data) {
        return http.post(`/fasttrack`, { queue, slotId: id, ...data }).catch((err) => {
            const statusCode = err.response?.status
            if (statusCode === 400) {
                errorAlert(err.response.data.description)
            } else if (statusCode === 403) {
                errorAlert('Этот слот уже занят или истёк.')
            } else {
                err.handleGlobally()
            }
        })
    }
}

export default new SlotDataService()
