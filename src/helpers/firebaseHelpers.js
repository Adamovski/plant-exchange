//create user in db function
const writeUserData = (username, email, uid, firebase) => {
  const user = `users/${uid}`;
  firebase.database().ref(user).set({
    username: username,
    email: email,
  });
};

export { writeUserData };

//creare a item in db function

const writeItemData = (userInput, firebase) => {
  let { category, title, desc, images } = userInput;
  let newItemKey = firebase.database().ref().child("items").push().key;
  const item = `items/${category}/${newItemKey}`;
  firebase
    .database()
    .ref(item)
    .set({
      category: category,
      title: title,
      desc: desc,
      images: images,
    })
    .catch((err) => {
      console.log(err);
    });
};

export { writeItemData };

const uploadFiles = (firebase, imageAsFile, setState, state) => {
  const imageUrls = [];
  const uploadTask = firebase
    .storage()
    .ref(`/images/${imageAsFile.name}`)
    .put(imageAsFile);
  //initiates the firebase side uploading
  uploadTask.on(
    "state_changed",
    (snapShot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
      console.log(`File ${imageAsFile.name} upload is ${progress}% done`);
    },
    (err) => {
      //catches the errors
      console.log(err);
    },
    () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      firebase
        .storage()
        .ref("images")
        .child(imageAsFile.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          setState([...state, fireBaseUrl]);
        });
    }
  );
  return imageUrls;
};
export { uploadFiles };

async function uploadImageAsPromise(firebase, imageAsFile) {
  return new Promise(function (resolve, reject) {
    let storageRef = firebase.storage().ref(`/images/${imageAsFile.name}`);

    //Upload file
    let task = storageRef.put(imageAsFile);

    //Update progress bar
    task.on(
      "state_changed",
      function progress(snapshot) {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
      },
      function error(err) {
        console.log(err);
        reject(err);
      },
      function complete() {
        let downloadURL = firebase
          .storage()
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL();
        resolve(downloadURL);
      }
    );
  });
}

export { uploadImageAsPromise };
