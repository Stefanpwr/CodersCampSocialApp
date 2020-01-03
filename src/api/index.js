import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.0.2:5000/api',
})

export const insertEvent = payload => api.post('/events', payload);
export const getAllEvents = () => api.get('/events');
export const updateEventById = (id, payload) => api.put(`/events/${id}`, payload)
export const deleteEventById = id => api.delete(`/events/${id}`)
export const getEventById = id => api.get(`/events/${id}`)

const apis = {
    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById
}

export default apis