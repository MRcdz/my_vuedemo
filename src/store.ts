import { createStore } from 'vuex'
import { ColumnProps, PostProps, UserProps, testData, articles, users } from './testData'

interface Route {
  params: {
    id: number;
  };
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  articleLists: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    articleLists: articles,
    user: users
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'cdz', columnId: 1 }
    },
    addArticle (state, newArticle) {
      state.articleLists.unshift(newArticle)
    }
  },
  getters: {
    getInfo: (state) => (route:Route) => {
      return state.columns.find(i => i.id === (+route.params.id))
    },
    getArticles: (state) => (route:Route) => {
      return state.articleLists.filter(i => i.columnId === (+route.params.id))
    }
  }
})

export default store
