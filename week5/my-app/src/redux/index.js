import movieReducer from './movie'
import showReducer from './shows'

const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
  movie: movieReducer,
  show: showReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})


