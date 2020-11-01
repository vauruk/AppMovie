import axios from 'axios'
import { Config } from '@/config'

const instance = axios.create({
    baseURL: Config.API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Config.TOKEN_TMDB}`,
    },
    timeout: 3000,
})

export const handleError = ({ message, data, status }) => {
    return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
    (response) => response,
    ({ message, response: { data, status } }) => {
        return handleError({ message, data, status })
    },
)

export default instance
