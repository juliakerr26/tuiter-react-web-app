import React from "react";

const WhoToFollowListItem = (
    {
        who = { username: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpeg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8 d-inline-block align-middle">
                    <div className="fw-bold">{who.username}</div>
                    <div className="d-block">@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end d-inline-block align-middle mt-1">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;