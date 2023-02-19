const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item">
      <img class="rounded-circle size-40" src=${who.avatarIcon}>
      <div class="d-inline-block align-middle">
          <b>${who.userName} <i class="fas fa-check-circle"></i></b>
          <small class="d-block">${who.handle}</small>
      </div>
      <button type="button"
       class="btn btn-primary rounded-pill d-inline-block align-middle float-end mt-1">Follow
      </button>
    </div>
 `);
}
export default WhoToFollowListItem;