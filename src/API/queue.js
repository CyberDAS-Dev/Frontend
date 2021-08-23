/* eslint-disable class-methods-use-this */
import { simpleGet } from '@/API/http'

class QueueDataService {
    getAll() {
        return simpleGet('/queues')
    }

    get(name) {
        return simpleGet(`/queues/${name}`)
    }
}

export default new QueueDataService()
