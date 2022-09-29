import "../editProfile/style.css";
export let editProfile =
  /*html*/
  `<div class="container-upload">
  <div class="upload-top">
      <form>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png"
              alt="photo" class="logo" id="logo1">

          <input type="text" class="search" placeholder="Search Images" name="saerch" id="searchUpload">
      </form>
      <div class="upload-rigth">
          <span>Explore</span>
          
          <i class="fa-solid fa-bell"></i>
          <img
        src="https://codefly.vn/wp-content/uploads/code/2020/12/11934/projecthtml/Source%20Code/uploadImage/Profile/blank_avatar.png"
        alt="" id="edit-nav-ava">
          <button class="button-upload" id="buttonUpload"> Upload</button>
      </div>
  </div>
  <div class="container-buttom">
      <div class="toolbar-top">
          <span class="toolbar-letter">My media</span>
          <span class="toolbar-letter">Upload</span>
          <span class="toolbar-letter">Statistics</span>
          <span class="toolbar-letter">Collections</span>
          <span class="toolbar-letter">Following</span>
          <span class="toolbar-letter">Messages</span>
          <span class="toolbar-letter">Settings</span>
          <span class="toolbar-letter-one">My profile</span>
      </div>
  </div>
  <div class="container-buttom-two">
      <div class="container-buttom-two-left">
          <div class="container-user-name">
              <h6 class="chu2">Personal Data</h6>
              <form id="form-ava">
                  <span>
                      Username
                  </span>
                  <input type="text" id="enterName" placeholder="">
                  <p>Profile image</p>
                  <img src="https://codefly.vn/wp-content/uploads/code/2020/12/11934/projecthtml/Source%20Code/uploadImage/Profile/blank_avatar.png" alt="photo"
                      class="imgUser" id='img-user'><br>
                  <input type="file" id="input-ava">
                  <div><button id="newUser">Upload profile</button></div>

              </form>
          </div>
          

      </div>

  </div>
  <div class="save">
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
  </div>
</div>
`;
