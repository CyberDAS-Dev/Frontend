import axios from 'axios'
import errorComposer from './errors'

const axiosInstance = axios.create({
    baseURL: 'https://api.cyberdas.net/next',
    headers: { 'Content-type': 'application/json' },
})

// eslint-disable-next-line func-names
axiosInstance.interceptors.response.use(undefined, function (error) {
    error.handleGlobally = errorComposer(error)
    return Promise.reject(error)
})

export default axiosInstance

// Запрос, который не имеет собственных ошибок и обрабатывает их глобально
// eslint-disable-next-line consistent-return
function simpleGet(url) {
    return this.get(url).catch((error) => error.handleGlobally())
}

axiosInstance.simpleGet = simpleGet
