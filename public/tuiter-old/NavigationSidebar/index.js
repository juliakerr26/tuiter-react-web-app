const NavigationSidebar = () => {
    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fas fa-home"></i></div>
         <div class="col-10 d-none d-xl-block">Home</div>
       </div>
     </a>
     <a href="index.html" class="list-group-item active">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-hashtag"></i></div>
         <div class="col-10 d-none d-xl-block">Explore</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-bell"></i></div>
         <div class="col-10 d-none d-xl-block">Notifications</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-envelope"></i></div>
         <div class="col-10 d-none d-xl-block">Messages</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-bookmark"></i></div>
         <div class="col-10 d-none d-xl-block">Bookmarks</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-list"></i></div>
         <div class="col-10 d-none d-xl-block">Lists</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fa fa-solid fa-user"></i></div>
         <div class="col-10 d-none d-xl-block">Profile</div>
       </div>
     </a>
     <a href="#" class="list-group-item">
       <div class="row">
         <div class="col-2"><i class="fas fa-ellipsis-h"></i></div>
         <div class="col-10 d-none d-xl-block">More</div>
       </div>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;