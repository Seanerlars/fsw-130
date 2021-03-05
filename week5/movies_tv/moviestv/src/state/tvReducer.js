export function setTvTitle(title) {
    return {
        type: "SET_TV_TITLE",
        payload: title
    }
}



const initialState = {
    title: "",
    
}

export default function tvReducer(tvShow = initialState, action) {
    switch(action.type) {
        case "SET_TV_TITLE":
            return {
                ...tvShow,
                title: action.payload
            }
        
        default:
            return tvShow
    }
}