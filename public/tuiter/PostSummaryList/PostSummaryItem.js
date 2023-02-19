const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item w-100 overflow-auto p-2">
                <img class="post-img-size rounded float-end d-inline-block" src="${post.image}">
                <small class="d-block">${post.topic}</small>
                <b class="d-inline-block">${post.userName} <i class="fas fa-check-circle"></i></b>
                <small class="d-inline-block"> - ${post.time}</small>
                <b class="d-block">${post.title}</b>
            </div>
    `)
}
export default PostSummaryItem;