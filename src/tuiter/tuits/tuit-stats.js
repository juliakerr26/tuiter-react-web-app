import React from "react";
import {useDispatch} from "react-redux";
import {updateLikes} from "./tuits-reducer";

const TuitStats = (
    {
        post = {
            "_id": 1,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 456,
            "likes": 321,
            "handle": "@spacex",
            "tuit": "tuit content here"
        }
    }
) => {
    const dispatch = useDispatch();
    const updateLikesHandler = (id) => {
        dispatch(updateTuitThunk(id));
    }

    return(

        <div className="row">
            <div className="col-3">
                <i className="fa-regular fa-comment"></i> {post.replies}
            </div>
            <div className="col-3">
                <i className="fa-solid fa-retweet"></i> {post.retuits}
            </div>
            <div className="col-3" onClick={() => updateLikesHandler(post._id)}>
                {post.liked ?
                <i className="fa-solid fa-heart" style={{color: "#ff2600",}}></i> :
                <i className="fa-solid fa-heart"></i>} {post.likes}
            </div>
            <div className="col-3">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    );
};

export default TuitStats;