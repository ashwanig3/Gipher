export function searchGif(query) {
    return dispatch => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=KWfYGPcB4o7FDqXP8VTx6cB8MT9V6L9E`)
        .then(res => res.json())
        .then(d => {
            dispatch({type: 'SEARCHED_GIF', data: d.data})
        })
    }
}