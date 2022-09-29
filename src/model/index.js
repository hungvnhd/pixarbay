import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
export let authUser = {};
import { alertSuccess, loading, setActiveScreen } from "../view";
import { loadImg } from "../controller";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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
      alertSuccess("Đăng kí thành công");
      // Signed in
      const user = userCredential.user;
      // ...
      setActiveScreen("login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export let signInExistingUser = (email, password) => {
  const auth = getAuth();
  loading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      loading(false);
      setActiveScreen("pixabay");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export let uploadImg = (inputId, avaId, nameId) => {
  loading(true);
  // const userImg = getAuth().currentUser.photoURL;
  // document.getElementById(avaId).src;
  const file = document.getElementById(inputId).files[0];
  // console.log(file);
  const storage = getStorage();

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        document.getElementById(avaId).src = downloadURL;
        // document.getElementById(avaId1).src = downloadURL;

        updateProfile(getAuth().currentUser, {
          displayName: `${document.getElementById(nameId).value}`,
          photoURL: downloadURL,
        })
          .then(() => {
            loading(false);
            setActiveScreen("myProfile");
            // Profile updated!

            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // userImg = downloadURL;
      });
    }
  );
};

export let displayAvaAndName = (avaId1, avaId2, avaId3) => {
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user.displayName, user.photoURL);

  document.getElementById(avaId1).innerText = user.displayName;
  document.getElementById(avaId2).src = user.photoURL;
  document.getElementById(avaId3).src = user.photoURL;
};
export let displayAvaOnly = (avaId1, avaId2) => {
  const auth = getAuth();
  const user = auth.currentUser;
  document.getElementById(avaId1).src = user.photoURL;
  document.getElementById(avaId2).src = user.photoURL;
};
