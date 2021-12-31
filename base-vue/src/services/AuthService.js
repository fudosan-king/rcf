import ApiService from '../services/ApiService';

const AuthService = {
    login({ email, password }) {
        return ApiService.post('auth/login', { email, password });
    },
    
    logout() {
        return ApiService.post('auth/logout', {}, {
            globalErrorHandler: { on: false }
        });
    },
    
    refreshToken() {
        return ApiService.post('auth/refresh', null, {
            setLoading: false
        });
    },
    
    getAuthUser() {
        return ApiService.get('auth/me');
    },
    
    forgotPassword(email) {
        return ApiService.post('forgot-password', {email}, {
            globalErrorHandler: {on: false}
        });
    },
    
    resetPassword(token, password, password_confirmation) {
        return ApiService.update(`reset-password/${token}`, {password, password_confirmation}, {
            globalErrorHandler: {on: false}
        });
    },
    
    // changePassword(data) {
    //     return ApiService.post('change-password', data)
    // },
}

export default AuthService;