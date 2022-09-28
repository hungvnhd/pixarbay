import { login } from "../pages/login/index";
import { signup } from "../pages/signup/index";
import { pixabay } from "../pages/pixabay/index";
import { myProfile } from "../pages/myProfile/index";
import { loginAdmin } from "../pages/loginAdmin/index";
import { uploadImage } from "../pages/uploadImage/index";
import { pagesAdmin } from "../pages/pagesAdmin/index";

import {
  validateImageInfo,
  validateRegisterInfo,
  validateSignInUser,
} from "../controller/index";
import swal from "sweetalert";
import { getImg } from "../model";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../index";
export let alertSuccess = (message) => {
  return swal({
    title: "Thành Công",
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
      const logo = document.getElementById("logo");
      logo.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("pixabay");
      });
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
      // setActiveScreen("pixabay");
      break;
    case "pixabay":
      if (app) {
        app.innerHTML = pixabay;
      }
      const upLoad = document.getElementById("buttonUpload");
      upLoad.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("uploadImage");
      });
      const myProfile1 = document.getElementById("btn-myProfile");
      myProfile1.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("myProfile");
      });
      getImg();
      const searchForm = document.getElementById("formSearch");
      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        window.location.href = `https://pixabay.com/images/search/${searchForm.search.value}/?manual_search=1`;
      });

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
      const join = document.getElementById("join");
      join.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("signup");
      });
      const btnUpload = document.getElementById("btn-upload");
      btnUpload.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("uploadImage");
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
      const login12 = document.getElementById("login12");
      login12.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("login");
      });
      btnUpload.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveScreen("login");
      });
      break;
    case "myProfile":
      if (app) {
        app.innerHTML = myProfile;
      }
      break;
    case "loginAdmin":
      if (app) {
        app.innerHTML = loginAdmin;
      }
      const loginAdminforn = document.getElementById("login-admin");
      loginAdminforn.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailAdmin = loginAdminforn.email.value;
        const passwordAdmin = loginAdminforn.password.value;
        validateSignInUser(emailAdmin, passwordAdmin);
      });
      break;
    case "pagesAdmin":
      if (app) {
        app.innerHTML = pagesAdmin;
      }
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
export let loading = (state) => {
  let loading = document.getElementById("loading");
  if (state == true) {
    loading.setAttribute("style", "display:block");
  } else {
    loading.setAttribute("style", "display:none");
  }
};
