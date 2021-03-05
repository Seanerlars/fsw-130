export function addMovie(Movie) {
    return {
        type: "ADD_MOVIE",
        payload: Movie
    }
}

export function removeMovie(Movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: Movie
    }
}

export default function movieReducer(Movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...Movies, action.payload]
        case "REMOVE_MOVIES": {            
            const updatedArr = Movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return Movies
    }
}