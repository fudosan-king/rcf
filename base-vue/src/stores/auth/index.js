import router from '@/routers'
import {AuthService} from '@/services';
import {
    ACTION_GO_LOGIN,
    ACTION_LOGIN,
    ACTION_LOGOUT,
    ACTION_REFRESH_TOKEN,
    ACTION_SAVE_AUTH_USER
} from './actions'

import {
    GO_LOGIN,
    LOGIN,
    LOGOUT,
    SAVE_ACCESS_TOKEN,
    SAVE_AUTH_USER,
    TOGGLE_IS_FETCHING_ACCESS_TOKEN
} from './mutations'

const state = {
    authUser: null,
    accessToken: null,
    isFetchingAccessToken: false
}

const getters = {
    authUser(state) {
        return state.authUser;
    },

    accessToken(state) {
        return state.accessToken;
    },

    isAuthenticated(state) {
        return Boolean(state.authUser);
    },

    isFetchingAccessToken(state) {
        return state.isFetchingAccessToken;
    }
}

const actions = {
    async [ACTION_LOGIN](context, payload) {
        const {data} = await AuthService.login(payload);
        localStorage.setItem('userInfo', JSON.stringify(data.user))
        localStorage.setItem('accessToken', data.access_token)
        context.commit(LOGIN, data);
        await context.dispatch(ACTION_SAVE_AUTH_USER);
    },

    async [ACTION_LOGOUT](context) {
        await AuthService.logout();
        context.commit(LOGOUT);
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')
    },

    async [ACTION_GO_LOGIN](context) {
        context.commit(GO_LOGIN);
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')
        router.push({name: 'login'}, () => {})
    },

    async [ACTION_REFRESH_TOKEN](context) {
        context.commit(TOGGLE_IS_FETCHING_ACCESS_TOKEN, true);
        const {data: {access_token}} = await AuthService.refreshToken();
        context.commit(SAVE_ACCESS_TOKEN, access_token);
        context.commit(TOGGLE_IS_FETCHING_ACCESS_TOKEN);
        localStorage.setItem('accessToken', access_token);
        await context.dispatch(ACTION_SAVE_AUTH_USER);
        return access_token;
    },

    async [ACTION_SAVE_AUTH_USER](context) {
        if (localStorage.getItem('accessToken')) {
            const {data} = await AuthService.getAuthUser();
            localStorage.setItem('userInfo', JSON.stringify(data))
            context.commit(SAVE_AUTH_USER, data);
            return data;
        }
    }
}

const mutations = {
    [LOGIN](state, {user = true, access_token}) {
        state.authUser = user;
        state.accessToken = access_token;
    },

    [GO_LOGIN](state) {
        Object.assign(state, {
            authUser: null,
            accessToken: null
        });
    },

    [LOGOUT](state) {
        Object.assign(state, {
            authUser: null,
            accessToken: null
        });
    },

    [SAVE_ACCESS_TOKEN](state, accessToken) {
        state.accessToken = accessToken;
    },

    [SAVE_AUTH_USER](state, authUser) {
        state.authUser = authUser;
    },

    [TOGGLE_IS_FETCHING_ACCESS_TOKEN](state, forceState = null) {
        state.isFetchingAccessToken = forceState !== null ?
            forceState :
            !state.isFetchingAccessToken;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
