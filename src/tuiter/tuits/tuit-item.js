import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        post = {
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
                    <div>{post.tuit}</div>
                    <TuitStats stats={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;