import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertMagatama = payload => api.post(`/magatamas`, payload)
export const getAllMagatamas = () => api.get(`/magatamas`)
export const updateMagatamaById = (id, payload) => api.put(`/magatamas/${id}`, payload)
export const deleteMagatamaById = id => api.delete(`/magatamas/${id}`)
export const getMagatamaById = id => api.get(`/magatamas/${id}`)

const apis = {
    insertMagatama,
    getAllMagatamas,
    updateMagatamaById,
    deleteMagatamaById,
    getMagatamaById,
}

export default apis