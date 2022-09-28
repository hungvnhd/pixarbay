import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export let authUser = {};
import { alertSuccess, setActiveScreen } from "../view";
import { loadImg } from "../controller";

export let uploadImage = (
  downloads,
  id,
  largeImageURL,
  likes,
  user,
  pageURL,
  previewURL
) => {
  addDoc(collection(db, "pixabay"), {
    downloads: downloads,
    id: id,
    largeImageURL: largeImageURL,
    likes: likes,
    user: user,
    pageURL: pageURL,
    previewURL: previewURL,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((err) => console.log(err));
};
export const getImg = () => {
  let imagesArr = [];
  getDocs(collection(db, "pixabay")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      imagesArr.push(doc.data());
    });
    console.log(imagesArr);
    imagesArr.forEach((e) => {
      // console.log(e.largeImageURL);
      loadImg(e.largeImageURL);
    });
  });
};

export let signUpNewUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alertSuccess("thanh cong");
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export let signInExistingUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alertSuccess("Sign In Successful");
      // Signed in
      const user = userCredential.user;
      // ...
      setActiveScreen("pixabay");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
