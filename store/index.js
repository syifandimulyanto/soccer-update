import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

const timelineStore = () => {
  return new Vuex.Store({
    state: {
      timelines: []
    },
    plugins: [createPersistedState()],
    mutations: {
      setTimelines: (state, timelines) => {
        state.timelines = timelines
      }
    },
    actions: {
      async getTimelines({ commit }) {
        await axios.get(process.env.API_URL + '/timelines').then(response => {
          if (response.status) commit('setTimelines', response.data)
        })
      },
      async nuxtServerInit(
        { commit },
        { store, isClient, isServer, route, params }
      ) {
        await axios.get(process.env.API_URL + '/timelines').then(response => {
          if (response.status) commit('setTimelines', response.data)
        })
      }
    }
  })
}

export default timelineStore
