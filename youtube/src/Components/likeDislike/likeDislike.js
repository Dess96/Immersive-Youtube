import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './likeDislike.css';
import allActions from '../../Actions'

const LikeDislike = () => {
    const like = useSelector(state => state.like)
    const dispatch = useDispatch()

    return (
        <div className="buttonContainer">
            <div className="textDiv">Likes {like}</div>
            <button onClick={() => dispatch(allActions.likeActions.like())} className="like">Like</button>
            <button onClick={() => dispatch(allActions.likeActions.dislike())} className="dislike">Dislike</button>
        </div>
    );
}

export default LikeDislike;