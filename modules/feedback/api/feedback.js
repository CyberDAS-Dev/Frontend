/* eslint-disable class-methods-use-this */
import http from '@/common/api/http'

class FeedbackDataService {
    getAll() {
        return http.simpleGet(`/feedback`)
    }

    get(recipient) {
        return http.simpleGet(`/feedback/${recipient}`)
    }

    post(recipient, data) {
        return http.post(`/feedback/${recipient}/items`, data).catch((err) => {
            err.handleGlobally()
        })
    }
}

export default new FeedbackDataService()
