import finIndex from 'lodash/findIndex'

import {
    ACTION_SET_ERROR,
    ACTION_CLEAR_ERROR,
    ACTION_SET_LOADING,
    ACTION_FINISH_LOADING,
    ACTION_CLEAR_LOADING,
    ACTION_SET_MESS,
    ACTION_CLEAR_MESS,
    ACTION_SET_PAGE_TITLE,
    ACTION_SET_ACTIVE_SIDEBAR,
    ACTION_CLEAR_SEARCH_PARAMS,
    ACTION_SET_SPECIAL_LOADING,
    ACTION_SET_DATA_LOADED,
} from './actions'

import {
    SET_ERROR,
    CLEAR_ERROR,
    SET_LOADING,
    FINISH_LOADING,
    CLEAR_LOADING,
    SET_MESSAGE,
    CLEAR_MESSAGE,
    SET_PAGE_TITLE,
    SET_ACTIVE_SIDEBAR,
    CLEAR_SEARCH_PARAMS,
    SET_SPECIAL_LOADING, SET_DATA_LOADED,
} from './mutations'

const state = {
    loading: 0,
    specialLoading: 0,
    message: null,
    error: null,
    pageTitle: '',
    activeSidebar: '',
    searchParams: {
        users: {},
        documents: {},
        mailTemplates: {},
        userService: {},
    },
    dataLoaded: []
}

const getters = {
    dataLoaded: (state) => state.dataLoaded,
    specialLoading: (state) => state.specialLoading > 0,
    isLoading: (state) => state.loading > 0 && state.specialLoading <= 0,
    error: (state) => state.error,
    message: (state) => state.message,
    pageTitle: (state) => state.pageTitle,
    activeSidebar: (state) => state.activeSidebar,
    searchParams: (state) => state.searchParams,
}

const actions = {
    [ACTION_SET_ERROR](context, error) {
        context.commit(SET_ERROR, error);
    },
    [ACTION_CLEAR_ERROR](context) {
        context.commit(CLEAR_ERROR);
    },
    [ACTION_SET_LOADING](context) {
        context.commit(SET_LOADING)
    },
    [ACTION_FINISH_LOADING](context) {
        context.commit(FINISH_LOADING)
    },
    [ACTION_CLEAR_LOADING](context) {
        context.commit(CLEAR_LOADING)
    },
    [ACTION_SET_SPECIAL_LOADING](context, payload) {
        context.commit(SET_SPECIAL_LOADING, payload)
    },
    [ACTION_SET_DATA_LOADED](context, payload) {
        context.commit(SET_DATA_LOADED, payload)
    },
    [ACTION_SET_MESS](context, message) {
        context.commit(SET_MESSAGE, message)
    },
    [ACTION_CLEAR_MESS](context) {
        context.commit(CLEAR_MESSAGE)
    },
    [ACTION_SET_PAGE_TITLE](context, pageTitle) {
        context.commit(SET_PAGE_TITLE, pageTitle)
    },
    [ACTION_SET_ACTIVE_SIDEBAR](context, sidebar) {
        context.commit(SET_ACTIVE_SIDEBAR, sidebar)
    },
    [ACTION_CLEAR_SEARCH_PARAMS](context, params) {
        context.commit(CLEAR_SEARCH_PARAMS, params)
    },

}

const mutations = {
    [SET_LOADING](state) {
        state.loading++
    },
    [FINISH_LOADING](state) {
        if (state.loading > 0) {
            state.loading--
        }
    },
    [CLEAR_LOADING](state) {
        state.loading = 0
    },
    [SET_SPECIAL_LOADING](state, payload) {
        state.specialLoading = payload
    },
    [SET_DATA_LOADED](state, payload) {
        if (payload) {
            let index = finIndex(state.dataLoaded, e => e.id === payload.id)
            if (index >= 0) {
                state.dataLoaded[index] = {...payload}
            } else {
                state.dataLoaded = [...state.dataLoaded, ...[payload]]
            }
        }
    },
    [SET_MESSAGE](state, message) {
        state.message = message
    },
    [CLEAR_MESSAGE](state) {
        state.message = null
    },
    [SET_ERROR](state, error) {
        state.error = error
    },
    [CLEAR_ERROR](state) {
        state.error = null
    },
    [SET_PAGE_TITLE](state, pageTitle) {
        state.pageTitle = pageTitle
    },
    [SET_ACTIVE_SIDEBAR](state, sidebar) {
        state.activeSidebar = sidebar
    },
    [CLEAR_SEARCH_PARAMS](state, params) {
        Object.keys(state.searchParams).map((e) => {
            if (e !== params) {
                state.searchParams[e] = {}
            }
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}