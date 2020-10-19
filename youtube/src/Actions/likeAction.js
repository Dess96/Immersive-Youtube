const like = () => {
    return {
        type: "INCREMENT"
    }
}

const dislike = () => {
    return {
        type: "DECREMENT"
    }
}

export default {
    like,
    dislike
}