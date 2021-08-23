import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.cyberdas.net/next',
    headers: { 'Content-type': 'application/json' },
})
