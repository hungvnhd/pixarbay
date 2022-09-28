import "./style.css";
export let signup =
  /*html*/
  `<div class="contain">
  <div class="frani1">
      <div class="fadu1">
          <h2 class="didi1">Pixabay</h2>
          <input class="inputt" type="text" placeholder="Tìm Kiếm">
          <i class="fa-solid fa-magnifying-glass " id="search"></i>
      </div>
      <div class="fadu2">
          <p class="cuti1">Explore</p>
          <p class="cuti1">Log in</p>
          <p class="cuti1">Join</p>
          <button class="taidi2">Upload</button id="btn-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
  </div>
  <div class="franit2">
      <div class="khung">
          <div class="fadue">
              <span class="cuti2" id="login12">Login</span>
              <span class="cuti3">Join</span>
          </div>
          <div class="didi2">
              <button class="taidi3"><i class="fa-brands fa-google"></i>Google</button>
              <button class="taidi4"><i class="fa-brands fa-facebook"></i>Facebook</button>
          </div>
          <form class="fadu3" id="registerForm">
              <input class="text1" type="email" placeholder="UserName or email" name="email">
              <div id="err-reg-email" class="err"></div>
              <input class="text2" type="password" placeholder="PassWord" name="password">
              <div id="err-reg-password" class="err"></div>
              <input class="text2" type="password" placeholder="Confirm PassWord" name="confirmPassword">
              <div id="err-reg-confirm-password" class="err"></div>
              <button class="taidi5">Sign up</button>
          </form>
      </div>
      <p class="css">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
  </div>
</div>`;
