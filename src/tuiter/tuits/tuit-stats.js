import React from "react";

const TuitStats = (
    {
        stats = {
            "liked": false,
            "replies": 345,
            "retuits": 321,
            "likes": 1234,
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-3">
                <i className="fa-regular fa-comment"></i> {stats.replies}
            </div>
            <div className="col-3">
                <i className="fa-solid fa-retweet"></i> {stats.retuits}
            </div>
            <div className="col-3">
                {stats.liked ?
                <i className="fa-solid fa-heart" style="color: #ff2600;"></i> :
                <i className="fa-solid fa-heart"></i>} {stats.likes}
            </div>
            <div className="col-3">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    );
};
export default TuitStats;