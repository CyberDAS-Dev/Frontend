/* eslint-disable class-methods-use-this */
import http from '@/common/api/http'
import { errorAlert } from './errors'

class OttService {
    post(reqData) {
        return http.post(`/account/ott`, reqData).catch((err) => {
            const statusCode = err.response?.status
            if (statusCode === 401) {
                errorAlert(err.response.data.description)
            } else {
                err.handleGlobally()
            }
        })
    }

    async getToken(reqData) {
        const { data } = await this.post(reqData)
        return { type: data.token_type, string: data.token }
    }
}

export default new OttService()
