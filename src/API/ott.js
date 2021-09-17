/* eslint-disable class-methods-use-this */
import http from '@/API/http'

class OttService {
    post(reqData) {
        return http.post(`/account/ott`, reqData).catch((err) => {
            err.handleGlobally()
        })
    }

    async getToken(reqData) {
        const { data } = await this.post(reqData)
        return data.token
    }
}

export default new OttService()
