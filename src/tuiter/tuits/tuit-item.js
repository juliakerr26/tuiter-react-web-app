import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "_id": 1,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg",
            "liked": false,
            "replies": 123,
            "retuits": 456,
            "likes": 321,
            "handle": "@spacex",
            "tuit": "tuit content here"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item p-2">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="fw-bolder d-inline-block">
                        {post.userName} <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="d-inline-block px-2">{post.handle} . {post.time}</div>
                    <div className="float-end">
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                    <div>{post.tuit}</div>
                    <TuitStats post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;