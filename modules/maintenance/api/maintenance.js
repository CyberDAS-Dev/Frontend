/* eslint-disable class-methods-use-this */
import http from '@/common/api/http'

class TechnicalDataService {
    post(data, token) {
        const headers = {}
        if (token) headers.Authorization = `${token.type} ${token.string}`

        return http.post(`/maintenance`, data, { headers }).catch((err) => {
            err.handleGlobally()
        })
    }
}

export default new TechnicalDataService()
