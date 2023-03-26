import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
    return (`
    <div class="list-group">
        <b class="list-group-item">Who To Follow</b>
        ${who.map(user =>
            `${WhoToFollowListItem(user)}`
        ).join('')}
    </div>
    `)
};
export default WhoToFollowList;
