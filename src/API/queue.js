/* eslint-disable class-methods-use-this */
import http from '@/API/http'

class QueueDataService {
    getAll() {
        return http.get('/queues')
    }

    get(name) {
        return http.get(`/queues/${name}`)
    }
}

export default QueueDataService
