import { renderErrorMessage } from "../view/index";
import {
  uploadImage,
  signUpNewUser,
  signInExistingUser,
  getImg,
} from "../model/index";
import { doc } from "firebase/firestore";
export let validateImageInfo = (
  downloads,
  id,
  largeImageURL,
  likes,
  user,
  pageURL,
  previewURL
) => {
  if (!downloads) {
    renderErrorMessage("error-dowloads", "Please enter your downloads");
  } else {
    renderErrorMessage("error-dowloads", "");
  }
  if (!id) {
    renderErrorMessage("error-id", "Please enter your id");
  } else {
    renderErrorMessage("error-id", "");
  }

  if (!largeImageURL) {
    renderErrorMessage(
      "error-largeImageURL",
      "Please enter your largeImageURL"
    );
  } else {
    renderErrorMessage("error-largeImageURL", "");
  }

  if (!likes) {
    renderErrorMessage("error-likes", "Please enter your likes");
  } else {
    renderErrorMessage("errore-likes", "");
  }
  if (!user) {
    renderErrorMessage("error-user", "Please enter your user");
  } else {
    renderErrorMessage("error-user", "");
  }
  if (!pageURL) {
    renderErrorMessage("error-pageURL", "Please enter your pageURL");
  } else {
    renderErrorMessage("error-pageURL", "");
  }
  if (!previewURL) {
    renderErrorMessage("error-previewURL", "Please enter your previewURL");
  } else {
    renderErrorMessage("error-previewURL", "");
  }
  if (
    downloads &&
    id &&
    largeImageURL &&
    likes &&
    user &&
    pageURL &&
    previewURL
  ) {
    uploadImage(downloads, id, largeImageURL, likes, user, pageURL, previewURL);
  }
};

export let validateRegisterInfo = (email, password, confirmPassword) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-reg-email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-reg-email", "Invalid email");
  } else {
    renderErrorMessage("err-reg-email", "");
  }

  if (!password) {
    renderErrorMessage("err-reg-password", "Please enter your password");
  } else {
    renderErrorMessage("err-reg-password", "");
  }

  if (!confirmPassword) {
    renderErrorMessage(
      "err-reg-confirm-password",
      "Please confirm your password"
    );
  }
  if (confirmPassword !== password && password && confirmPassword) {
    renderErrorMessage("err-reg-confirm-password", "Password does not match");
  }
  if (email && password && confirmPassword && password === confirmPassword) {
    signUpNewUser(email, password);
  }
};

export let validateSignInUser = (email, password) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-login-email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-login-email", "Invalid email");
  } else {
    renderErrorMessage("err-login-email", "");
  }

  if (!password) {
    renderErrorMessage("err-login-password", "Please enter your password");
  } else {
    renderErrorMessage("err-login-password", "");
  }

  if (email && password) {
    signInExistingUser(email, password);
  }
};

export let loadImg = (src) => {
  const images = document.getElementById("flexbox");
  let div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = ` <img src="${src}" />`;
  images.appendChild(div);
  div.onclick = () => {
    window.location.href = `${src}`;
  };
};
