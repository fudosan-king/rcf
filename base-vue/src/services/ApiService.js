import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/stores'
import {API_ENDPOINT} from '@/config.js'
import {ACTION_SET_ERROR, ACTION_SET_LOADING, ACTION_FINISH_LOADING} from '@/stores/common/actions'
import {ACTION_REFRESH_TOKEN, ACTION_GO_LOGIN} from '@/stores/auth/actions';
import {
    NO_INTERNET,
    UNAUTHENTICATED,
    FORBIDDEN,
    // LOGIN_FAILED,
    SERVER_ERROR,
    NOT_FOUND,
} from '@/helpers/message'
import {TOGGLE_IS_FETCHING_ACCESS_TOKEN} from '@/stores/auth/mutations'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast, {
    position: 'top-right',
    singleton: true,
});

let subscribers = []

const ApiService = {
    init() {
        const service = this
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_ENDPOINT
        // intercept every request
        Vue.axios.interceptors.request.use(
            (request) => {
                const accessToken = store.getters.accessToken || localStorage.getItem('accessToken');
                if (accessToken) {
                    request.headers.common['Authorization'] = `Bearer ${accessToken}`;
                }
                if (request.setLoading) {
                    store.dispatch(ACTION_SET_LOADING)
                }
                return request
            },
            (error) => {
                const {response} = error;
                if (response.config.setLoading) {
                    store.dispatch(ACTION_FINISH_LOADING)
                }
                // Do something with request error
                return Promise.reject(response)
            }
        )
        // intercept every response
        Vue.axios.interceptors.response.use(
            (response) => {
                const {config} = response;
                if (config.setLoading) {
                    store.dispatch(ACTION_FINISH_LOADING)
                }
                return response
            },
            (error) => {
                const {response, config} = error;
                if (config.setLoading) {
                    store.dispatch(ACTION_FINISH_LOADING)
                }
                // refresh token
                if (response && response.status === 401 && config.url !== 'auth/refresh' && config.url !== 'auth/login') {
                    const isFetchingAccessToken = store.getters.isFetchingAccessToken;
                    if (!isFetchingAccessToken) {
                        this.clearSubscriber();
                        localStorage.removeItem('accessToken');
                        delete config.headers.Authorization;
                        store.dispatch(ACTION_REFRESH_TOKEN)
                            .then(accessToken => {
                                this.onAccessTokenFetched(accessToken)
                            })
                            .catch(() => {
                                store.commit(TOGGLE_IS_FETCHING_ACCESS_TOKEN, false);
                                store.dispatch(ACTION_GO_LOGIN)
                            })
                    } else {
                        store.dispatch(ACTION_GO_LOGIN)
                    }
                    return this.retryOriginalRequest(config);
                }
                // check if config errorHandler is on
                if (config.globalErrorHandler.on) {
                    service.handleError(response, config.globalErrorHandler.exclude)
                }
                return Promise.reject(response)
            })
    },
    onAccessTokenFetched(accessToken) {
        subscribers.forEach(function (callback) {
            callback(accessToken);
        })
        this.clearSubscriber();
    },
    retryOriginalRequest(originalRequest) {
        return new Promise((resolve) => {
            this.addSubscriber(accessToken => {
                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                resolve(axios(originalRequest))
            })
        })
    },
    addSubscriber(callback) {
        subscribers.push(callback)
    },
    clearSubscriber() {
        subscribers = [];
    },
    setHeader() {
        Vue.axios.defaults.withCredentials = true
        Vue.axios.defaults.headers.common[
            'Content-Type'
            ] = 'application/json'
        Vue.axios.defaults.setLoading = true;
        Vue.axios.defaults.globalErrorHandler = {
            on: true,
            exclude: [],
        };
        // Vue.axios.defaults.headers.common.Authorization = `Bearer ${ACCESS _TOKEN}`
    },
    setHeaderImage(type) {
        Vue.axios.defaults.headers.common[
            'Content-Type'
            ] = type
    },
    setResponseType(type) {
        Vue.axios.defaults.responseType = type
    },
    get(resource, config = {}) {
        return Vue.axios.get(resource, config)
    },
    post(resource, params, config = {}) {
        return Vue.axios.post(`${resource}`, params, config)
    },
    update(resource, params, config = {}) {
        return Vue.axios.put(resource, params, config)
    },
    updateBulk(resource, params, config = {}) {
        return Vue.axios.put(resource, params, config)
    },
    delete(resource, config = {}) {
        return Vue.axios.delete(resource, config)
    },
    customRequest(config) {
        return Vue.axios(config)
    },
    handleError(response, ignore = []) {
        if (ignore.length > 0 && ignore.includes(response.status)) return response
        let error = null
        if (!navigator.onLine || !response) {
            Vue.$toast.error(NO_INTERNET)
        } else {
            switch (response.status) {
                case 400:
                    Vue.$toast.error(response.data.message)
                    break;

                case 401:
                    // store.dispatch(LOGOUT, response.status)
                    if (response.data && response.data.message) {
                        Vue.$toast.error(response.data.message)
                    } else {
                        Vue.$toast.error(UNAUTHENTICATED)
                    }
                    Vue.$router.push({name: "login"}, () => {
                    });
                    break;

                case 403:
                    if (response.data && response.data.message) {
                        Vue.$toast.error(response.data.message)
                    } else {
                        Vue.$toast.error(FORBIDDEN)
                    }
                    break;

                case 404:
                    if (response.data && response.data.message) {
                        Vue.$toast.error(response.data.message)
                    } else {
                        Vue.$toast.error(NOT_FOUND)
                    }
                    break;

                case 422:
                    // if (response.config.url === 'auth/login') {
                    //   Vue.$toast.error(LOGIN_FAILED)
                    // }
                    break;

                default:
                    if (response.data && response.data.message) {
                        Vue.$toast.error(response.data.message)
                    } else {
                        Vue.$toast.error(SERVER_ERROR)
                    }
                    break;
            }
        }
        store.dispatch(ACTION_SET_ERROR, error)
    },
    makeURL(prefix, params = {}) {
        let url = `${prefix}?`
        Object.keys(params).map((e, i) => {
            url += `${e}=${params[e]}`
            if (i < Object.keys(params).length - 1) {
                url += `&`
            }
        })
        return url
    }
}

export default ApiService