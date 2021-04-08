import { createStore } from 'vuex'

const ADD_FORM = 'add form', MOVIE_LIST = 'movie list'

export default createStore({
    state: {
        selectedView: ADD_FORM
    },
    mutations: {
        changeSelectedView(state, newView) {
            state.selectedView = newView
        }
    },
    actions: {
        showMovieList({ commit }) {
            commit('changeSelectedView', MOVIE_LIST)
        },
        showAddForm({ commit }) {
            commit('changeSelectedView', ADD_FORM)
        }
    },
    modules: {
    }
})
