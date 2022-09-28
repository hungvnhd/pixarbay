import { login } from "../pages/login/index";
import { signup } from "../pages/signup/index";
import { pixabay } from "../pages/pixabay/index";
import { uploadImage } from "../pages/uploadImage/index";
import {
  validateImageInfo,
  validateRegisterInfo,
  validateSignInUser,
} from "../controller/index";
import swal from "sweetalert";
import { getImg } from "../model";
export let alertSuccess = (message) => {
  return swal({
    title: "Thanh cong",
    text: message,
    icon: "success",
    button: "ok",
  });
};

export let setActiveScreen = (screenName) => {
  const app = document.getElementById("app");
  switch (screenName) {
    case "uploadImage":
      if (app) {
        app.innerHTML = uploadImage;
      }
      const uploadForm = document.getElementById("login-form");
      if (uploadForm) {
        console.log(uploadForm);
        uploadForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const downloads = uploadForm.downloads.value;
          const id = uploadForm.id.value;
          const largeImageURL = uploadForm.largeImageURL.value;
          const likes = uploadForm.likes.value;
          const user = uploadForm.user.value;
          const pageURL = uploadForm.pageURL.value;
          const previewURL = uploadForm.previewURL.value;

          validateImageInfo(
            downloads,
            id,
            largeImageURL,
            likes,
            user,
            pageURL,
            previewURL
          );
          uploadForm.downloads.value = "";
          uploadForm.id.value = "";
          uploadForm.largeImageURL.value = "";
          uploadForm.likes.value = "";
          uploadForm.user.value = "";
          uploadForm.pageURL.value = "";
          uploadForm.previewURL.value = "";
        });
      }

      break;
    case "pixabay":
      if (app) {
        app.innerHTML = pixabay;
      }
      getImg();
      const searchInput = document.getElementById("input");
      searchInput.addEventListener("keyup", () => {});

      break;
    case "login":
      if (app) {
        app.innerHTML = login;
      }
      const loginForm = document.getElementById("sign-in-form");
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        validateSignInUser(email, password);
      });
      break;
    case "signup":
      if (app) {
        app.innerHTML = signup;
      }
      const signUpForm = document.getElementById("registerForm");

      signUpForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = signUpForm.email.value;
        const password = signUpForm.password.value;
        const confirmPassword = signUpForm.confirmPassword.value;
        console.log(email, password, confirmPassword);
        validateRegisterInfo(email, password, confirmPassword);
      });
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
    console.log("Hello world");
  }
};
