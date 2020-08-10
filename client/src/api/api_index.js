import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMagatama = payload => api.post(`/magatama`, payload)
export const getAllMagatamas = () => api.get(`/magatama`)
export const updateMagatamaById = (id, payload) => api.put(`/magatama/${id}`, payload)
export const deleteMagatamaById = id => api.delete(`/magatama/${id}`)
export const getMagatamaById = id => api.get(`/magatama/${id}`)

const apis = {
    insertMagatama,
    getAllMagatamas,
    updateMagatamaById,
    deleteMagatamaById,
    getMagatamaById,
}

export default apis