/* eslint-disable class-methods-use-this */
import http from '@/common/api/http'

class QueueDataService {
    getAll(day, offset) {
        return http.simpleGet('/queues', { params: { day, offset } })
    }

    get(name) {
        return http.simpleGet(`/queues/${name}`)
    }
}

export default new QueueDataService()
