import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test: 'vuex test!',
        count: 0,
        title: ''
    },
    actions: {
        async AcCount({ commit }) {
            const responseData = await fetch(
                'https://jsonplaceholder.typicode.com/posts/1'
            )
            const response = await responseData.json()
            commit('asyncCount', response)
        }
    },
    getters: {
        getTitle(state) {
            return state.title
        }
    },
    mutations: {
        MuTest(state) {
            return state.test
        },
        asyncCount(state, response) {
            state.title = response.title
        }
    }
})

export default store
