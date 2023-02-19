import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="pb-2">
            <label for="wd-search-bar" class="search-icon position-absolute pl-10 pt-1">
                <i class="fas fa-search"></i>
            </label>
            <input id="wd-search-bar" class="rounded-pill search-bar bg-white" placeholder="Search Tuiter"/>
            <a class="pt-1 align-middle float-end" href="#"><i class="fas fa-cog" style="font-size: 20px"></i></a>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-sm-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="img-container">
            <img class="w-100" src="../../images/spaceX-starship.jpg">
            <b class="img-description">SpaceX's Starship</b>
        </div>
        ${PostSummaryList()}

    `)
}
export default ExploreComponent;