export function getShows() {
    return {
        type:"GET_SHOWS"
    }
}
export function addShow(show){
    return {
        type:"ADD_SHOW",
        payload: show
    }
}
export function delShow(show){
    return {
        type: "DEL_SHOW",
        payload: show
    }
}
export default function showReducer(shows = [], action){
    switch(action.type) {
        case "GET_SHOWS":
            return shows
        case "ADD_SHOW":
            return [...shows, action.payload]
        case "DEL_SHOW": {
            const updatedArr = shows.filter(show => show.toLowerCase())  
            return updatedArr 
        }

        default:
            return shows
    }
}