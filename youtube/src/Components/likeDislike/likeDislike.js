import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './likeDislike.css';
import allActions from '../../Actions'

const LikeDislike = ({data}) => {
    useSelector(state => state.like)
    const dispatch = useDispatch()
   

    return (
        <div className="buttonContainer">
            <div className="textDiv">Likes {data.likesPar}</div>
            <button onClick={() => dispatch(allActions.likeActions.like(data))} className="like">Like</button>
            <button onClick={() => dispatch(allActions.likeActions.dislike(data))} className="dislike">Dislike</button>
        </div>
    );
}

export default LikeDislike;