const initState = {
    searchedGif: []
}

export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'SEARCHED_GIF': {
            return {
                ...state,
                searchedGif: action.data
            }
        }
        default:
        return state;
    }
}