import firebase from "firebase";
import clothes from "../sampleClothes";

//create user in db function
const writeUserData = (username, email, uid) => {
  const user = `users/${uid}`;
  firebase.database().ref(user).set({
    username: username,
    email: email,
  });
};

export { writeUserData };

const seedDatabase = () => {
  clothes.map((cloth) => {
    const { category, title, desc, images } = cloth;
    let newItemKey = firebase.database().ref().child("items").push().key;
    const item = `items/${newItemKey}`;
    firebase
      .database()
      .ref(item)
      .set({
        id: newItemKey,
        category: category,
        title: title,
        desc: desc,
        images: images,
      })
      .catch((err) => {
        console.log(err);
      });
    return null;
  });
};

export { seedDatabase };

//creare a item in firebase database function

const writeItemData = (category, title, desc, images, uid) => {
  let newItemKey = firebase.database().ref().child("items").push().key;
  const item = `items/${newItemKey}`;
  firebase
    .database()
    .ref(item)
    .set({
      owner: uid,
      id: newItemKey,
      category: category,
      title: title,
      desc: desc,
      images: images,
    })
    .catch((err) => {
      console.log(err);
    });
  const userRef = `users/${uid}/items/${newItemKey}`;
  firebase
    .database()
    .ref(userRef)
    .set({
      owner: uid,
      id: newItemKey,
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

async function uploadImageAsPromise(imageAsFile) {
  return new Promise(function (resolve, reject) {
    let storageRef = firebase.storage().ref(`/images/${imageAsFile.name}`);

    //Upload file
    let task = storageRef.put(imageAsFile);

    //Update progress bar in console - figure out how to make loader from this
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

const getItemsFromFirebase = (category) => {
  return firebase
    .database()
    .ref(`items/${category}`)
    .once("value")
    .then(function (snapshot) {
      return snapshot.val();
    });
};

export { getItemsFromFirebase };

//return an array with all items from  a category
const getCategory = (category) => {
  return new Promise((resolve, reject) => {
    let categoryArray = [];
    firebase
      .database()
      .ref("items")
      .orderByChild("value")
      .once(
        "value",
        (snapshot) => {
          snapshot.forEach((snapshot) => {
            //only get items of specific category
            if (snapshot.val().category === category) {
              //add item to array
              categoryArray.push(snapshot.val());
            }
          });
          //return array as resolution
          resolve(categoryArray);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
  });
};

export { getCategory };

//return an array with all items that belong to user
const getUserItems = (uid) => {
  return new Promise((resolve, reject) => {
    let itemsArray = [];
    firebase
      .database()
      .ref("users")
      .orderByKey()
      .equalTo(uid)
      .once(
        "value",
        (snapshot) => {
          snapshot.forEach((snapshot) => {
            //only get items of specific category
            //add item to array
            // console.log(Object.keys(snapshot.val().items));
            if (snapshot.val().items) {
              Object.keys(snapshot.val().items).map((key) => {
                itemsArray.push(snapshot.val().items[key]);
                return itemsArray;
              });
            }
          });
          //return array as resolution
          resolve(itemsArray);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
  });
};

export { getUserItems };

//returns first 10 items
const getFirst10 = () => {
  return new Promise((resolve, reject) => {
    let itemArray = [];
    firebase
      .database()
      .ref("items")
      .orderByChild("value")
      .limitToFirst(10)
      .once(
        "value",
        (snapshot) => {
          snapshot.forEach((snapshot) => {
            itemArray.push(snapshot.val());
          });
          resolve(itemArray);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
  });
};

export { getFirst10 };

const getSpecificItem = (itemId) => {
  return new Promise((resolve, reject) => {
    let value;
    firebase
      .database()
      .ref(`items/${itemId}`)
      .orderByChild("value")
      .on(
        "value",
        (snapshot) => {
          value = snapshot.val();
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    resolve(value);
  });
};

export { getSpecificItem };

const deleteItem = (itemId, userId) => {
  let ref = firebase
    .database()
    .ref(`items/${itemId}`)
    .remove()
    .then(function () {
      console.log("Remove succeeded.");
    })
    .catch(function (error) {
      console.log("Remove failed: " + error.message);
    });
  let ref2 = firebase
    .database()
    .ref(`users/${userId}/items/${itemId}`)
    .remove()
    .then(function () {
      console.log("Remove succeeded.");
    })
    .catch(function (error) {
      console.log("Remove failed: " + error.message);
    });
};

export { deleteItem };
