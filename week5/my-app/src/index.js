import store from "./redux/index"
import {getMovies, addMovie, delMovie} from "./redux/movies"
import {getShows, addShow, delShow} from "./redux/shows"

store.dispatch(addMovie("The Dark Knight"))
store.dispatch(addMovie("Ocean's 11"))
store.dispatch(addMovie("Heat"))
store.dispatch(getMovies())
store.dispatch(addShow("Wandavision"))
store.dispatch(addShow("Peaky Blinders"))
store.dispatch(addShow("WestWorld"))
store.dispatch(getMovies())
store.dispatch(getShows())
store.dispatch(delMovie("The Dark Knight"))
store.dispatch(getMovies())
store.dispatch(delShow("Wandavision"))
store.dispatch(getShows())

