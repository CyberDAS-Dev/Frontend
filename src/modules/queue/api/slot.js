/* eslint-disable class-methods-use-this */
import http from '@/common/api/http'
import { errorAlert } from '../../../common/api/errors'

class SlotDataService {
    getAll(queue) {
        return http.simpleGet(`/queues/${queue}/slots`)
    }

    get(queue, id) {
        return http.simpleGet(`/queues/${queue}/slots/${id}`)
    }

    reserve(queue, id, token = null) {
        const headers = {}
        if (token) headers.Authorization = `${token.type} ${token.string}`

        return http
            .post(`/queues/${queue}/slots/${id}/reserve?next=cancel`, {}, { headers })
            .catch((err) => {
                const statusCode = err.response?.status
                if (statusCode === 403 || statusCode === 401) {
                    errorAlert(err.response.data.description)
                } else {
                    err.handleGlobally()
                }
            })
    }
}

export default new SlotDataService()
