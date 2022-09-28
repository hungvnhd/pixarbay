import "../editProfile/style.css";
export let editProfile =
  /*html*/
  `<div class="container-upload">
  <div class="upload-top">
      <form>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png"
              alt="photo" class="logo">

          <input type="text" class="search" placeholder="Search Images" name="saerch" id="searchUpload">
      </form>
      <div class="upload-rigth">
          <span>Explore</span>
          <i class="fa-solid fa-chevron-down"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-sharp fa-solid fa-circle-user"></i>
          <button class="button-upload" id="buttonUpload"><i
                  class="fa-solid fa-arrow-up-from-bracket"></i>Upload</button>
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
              <form action="user">
                  <span>
                      Username
                  </span>
                  <input type="text" id="enterName" placeholder="">
                  <p>Profiles imgage</p>
                  <img src="./z3756413681977_c41588d7458c2f3d2d391e2a4e36865d.jpg" alt="photo"
                      class="imgUser"><br>
                  <input type="file">
                  <div><button id="newUser">Upload profile image</button></div>

              </form>
          </div>
          <div class="container-centent">
              <form action="">
                  <h6 class="chu2">Online Profiles</h6>
                  <div class="fake">
                      <span>Please select</span>
                      <input type="text" name="input" id="enterName">
                      <div>
                          <span>First name</span>
                          <input type="text" name="input" id="enterName">
                      </div>
                      <div>
                          <span>Last name</span>
                          <input type="text" name="input" id="enterName">
                      </div>
                      <div>
                          <span>City</span>
                          <input type="text" name="input" id="enterName">
                      </div>
                      <div>
                          <span>Country</span>
                          <input type="text" name="input" id="enterName">
                      </div>
                      <span>Date of birth</span>
                      <input type="text" name="input" id="enterName">
                  </div>
              </form>
          </div>

      </div>

  </div>
  <div class="save">
      <button id="buttonSave">Save</button>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
  </div>


</div>
`;
