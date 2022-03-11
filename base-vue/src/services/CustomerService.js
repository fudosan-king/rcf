import ApiService from '../services/ApiService';

const CustomerService = {
    list(page, limit) {
        return ApiService.get(`customers?page=${page}&limit=${limit}`)
    },
    create(data) {
        return ApiService.post('customers', data)
    },
    update(id, data) {
        return ApiService.update(`customers/${id}`, data)
    },
    delete(id) {
        return ApiService.delete(`customers/${id}`)
    },
    detail(id) {
        return ApiService.get(`customers/${id}`)
    },
    deleteAll(data) {
        return ApiService.post(`customers/delete`, data)
    },
}

export default CustomerService;