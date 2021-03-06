import api, { handleError } from '@/services'

export default async (movieId) => {
    if (!movieId) {
        return handleError({ message: 'movieId is required' })
    }

    const response = await api.get(`movie/${movieId}`)
    return response.data
}
