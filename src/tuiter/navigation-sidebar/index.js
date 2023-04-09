import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`} href="/tuiter/home">
                <div className="row">
                    <div className="col-2"><i className="fas fa-home"></i></div>
                    <div className="col-10 d-none d-xl-block">Home</div>
                </div>
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`} href="/tuiter/explore">
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-hashtag"></i></div>
                    <div className="col-10 d-none d-xl-block">Explore</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-bell"></i></div>
                    <div className="col-10 d-none d-xl-block">Notifications</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-envelope"></i></div>
                    <div className="col-10 d-none d-xl-block">Messages</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-bookmark"></i></div>
                    <div className="col-10 d-none d-xl-block">Bookmarks</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-list"></i></div>
                    <div className="col-10 d-none d-xl-block">Lists</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fa fa-solid fa-user"></i></div>
                    <div className="col-10 d-none d-xl-block">Profile</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
                    <div className="col-10 d-none d-xl-block">More</div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;