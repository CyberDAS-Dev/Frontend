import axios from 'axios'
import errorComposer, { errorAlert } from './errors'

const axiosInstance = axios.create({
    baseURL: `https://api.cyberdas.net/${process.env.NEXT_PUBLIC_API_VERSION || 'next'}`,
    headers: { 'Content-type': 'application/json' },
})

// eslint-disable-next-line func-names
axiosInstance.interceptors.response.use(undefined, function (error) {
    error.handleGlobally = errorComposer(error)
    error.alert = errorAlert
    return Promise.reject(error)
})

export default axiosInstance

// Запрос, который не имеет собственных ошибок и обрабатывает их глобально
// eslint-disable-next-line consistent-return
function simpleGet(url, ...args) {
    return this.get(url, ...args).catch((error) => error.handleGlobally())
}

axiosInstance.simpleGet = simpleGet
