import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: window.sessionStorage.getItem('token'),
        email: window.sessionStorage.getItem('email'),
        file: window.localStorage.getItem('file', ),
        lang: window.localStorage.getItem('lang', ),
    },
    mutations: {
        set_token: (state, data) => {
            state.token = data;
            window.sessionStorage.setItem('token', data)
        },
        set_email: (state, data) => {
            state.email = data;
            window.sessionStorage.setItem('email', data)
        },
        set_file: (state, data) => {
            state.file = data;
            window.localStorage.setItem('file', data)
        },
        set_lang: (state, data) => {
            state.lang = data;
            window.localStorage.setItem('lang', data)
        }

    },
    actions: {},
    modules: {}
})