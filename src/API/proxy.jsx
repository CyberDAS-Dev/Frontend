/* eslint-disable class-methods-use-this */
import React from 'react'
import http from '@/API/http'
import { errorAlert, supportEmail } from './errors'

class BackendProxyService {
    get(token, url) {
        if (!token || !url) {
            errorAlert(
                <div>
                    Не хватает данных для составления запроса. Перейдите по ссылке еще раз, либо
                    напишите нам на {supportEmail}
                </div>
            )
            return false
        }
        return http.simpleGet(`/${url}?token=${token}`)
    }
}

export default new BackendProxyService()
