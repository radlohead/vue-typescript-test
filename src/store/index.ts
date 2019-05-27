import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test: 'vuex test!',
        count: 0
    },
    mutations: {
        MuTest(state) {
            return state.test
        }
    }
})

export default store
