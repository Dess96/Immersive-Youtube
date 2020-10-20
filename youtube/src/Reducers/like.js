const likes = (state = {}, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                id: action.payload.id,
                likes: action.payload.likesPar++
            }
        case "DECREMENT":
            return {
                id: action.payload.id,
                likes: action.payload.likesPar--
            }
        default: 
            return state
    }
}

export default likes