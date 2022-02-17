import ApiService from '../services/ApiService';


const MixinService = {
    roles() {
        return ApiService.get('roles')
    },
}

export default MixinService