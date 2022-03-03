import ApiService from '@/services/ApiService';

const ProfileService = {
    detail() {
        return ApiService.get(`profile`)
    },
    update(id, data) {
        ApiService.setHeaderImage('form-data');
        return ApiService.post(`profile`, data)
    },
    changePassword(data) {
        ApiService.setHeaderImage('form-data');
        return ApiService.post('change-password', data)
    },

}
export default ProfileService