/* eslint-disable class-methods-use-this */
import React from 'react'
import http from '@/common/api/http'
import { errorAlert, mayBeError } from './errors'

class BackendProxyService {
    get(token, url) {
        if (!token || !url) {
            errorAlert(<div>Не хватает данных для составления запроса. {mayBeError}</div>)
            return false
        }
        return http.get(`/${url}?token=${token}`)
    }
}

export default new BackendProxyService()
