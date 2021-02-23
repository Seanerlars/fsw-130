export function getMovies() {
    return {
        type:"GET_MOVIES"
    }
}
export function addMovie(movie){
    return {
        type:"ADD_MOVIE",
        payload: movie
    }
}
export function delMovie(movie)
    return {
        type: "DEL_MOVIE",
        payload: movie
}
export default function movieReducer(movies = [], action){
    switch(action.type) {
        case "GET_MOVIES":
            return movie
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "DEL_MOVIES": {
            const updatedArr = movies.filter(movie => movie.toLowerCase())  
            return updatedArr 
        }

        default:
            return movies
    }
}