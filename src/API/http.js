import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.cyberdas.net/v1',
    headers: { 'Content-type': 'application/json' },
})
