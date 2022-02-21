import ApiService from '../services/ApiService';

const UserService = {
    list(page, limit) {
        return ApiService.get(`users?page=${page}&limit=${limit}`)
    },
    create(data) {
        return ApiService.post('users', data)
    },
    update(id, data) {
        return ApiService.update(`users/${id}`, data)
    },
    delete(id) {
        return ApiService.delete(`users/${id}`)
    },
    detail(id) {
        return ApiService.get(`users/${id}`)
    },
    deleteAll(data) {
        return ApiService.post(`users/delete`, data)
    },
    changeStatus(id, status) {
        return ApiService.post(`users/${id}/change-status`, {status})
    },
    changeRole(data) {
        return ApiService.post('users/setting-role', data)
    },
    changePassword(data) {
        return ApiService.post('users/change-password', data)
    },
}

export default UserService;