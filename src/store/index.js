import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
      {
        name: "Mon article 1",
        desc: "Trou noir",
        published: false
      },
      {
        name: "Mon article 2",
        desc: "Trou blanc",
        published: true
      },
      {
        name: "Mon article 3",
        desc: "Trou de ver",
        published: false
      }
    ],
    movies: []
  },
  mutations: {
    DELETE_ARTICLE(state, index) {
      state.articles.splice(index, 1);
    },
    SET_MOVIES: (state, movies) => {
      state.movies = movies;
    }
  },
  getters: {
    getPublishedArticles: state => {
      return state.articles.filter(article => article.published)
    }
    },
  actions: {
    GET_MOVIES: (context) => {
      fetch('https://ghibliapi.herokuapp.com/films').then(res => {
        return res.json().then(json => {
          context.commit("SET_MOVIES", json)
        })
      })
    }
  },
  modules: {
  }
})
