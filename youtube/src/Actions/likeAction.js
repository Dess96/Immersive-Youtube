const like = (videoObj) => {
    return {
        type: "INCREMENT",
        payload: videoObj
    }
}

const dislike = (videoObj) => {
    return {
        type: "DECREMENT",
        payload: videoObj
    }
}

export default {
    like,
    dislike
}