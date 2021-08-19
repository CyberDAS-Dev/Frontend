import http from '@/API/http'

class SlotDataService {
    constructor(queue) {
        this.queue = queue
    }

    getAll() {
        return http.get(`/queues/${this.queue}/slots`)
    }

    get(id) {
        return http.get(`/queues/${this.queue}/slots/${id}`)
    }

    reserve(id) {
        return http.post(`/queues/${this.queue}/slots/${id}/reserve`)
    }
}

export default SlotDataService
