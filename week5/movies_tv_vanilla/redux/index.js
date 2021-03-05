const redux = require("redux")
const {combineReducers, createStore} = redux
import movieReducer from "./movieReducer"
import tvReducer from "./tvReducer"

const rootReducer = combineReducers({
    count: countReducer,
    movies: movieReducer,
    tvshows : tvReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store