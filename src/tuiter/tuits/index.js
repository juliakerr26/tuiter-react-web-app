import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import posts from "./tuits.json"


const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <div>
            <ul className="list-group">
                {
                    postsArray.map(post =>
                        <TuitItem
                            key={post._id}
                            post={post}/> )
                }
            </ul>
        </div>
    );
};
export default TuitsList;