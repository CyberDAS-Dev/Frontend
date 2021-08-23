/* eslint-disable class-methods-use-this */
import http from '@/API/http'

class QueueDataService {
    getAll() {
        return http.simpleGet('/queues')
    }

    get(name) {
        return http.simpleGet(`/queues/${name}`)
    }
}

export default new QueueDataService()
