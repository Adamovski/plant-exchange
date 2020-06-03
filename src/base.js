import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const config = {
//   apiKey: "AIzaSyC2GTjqA6R11vYDvkuuHb2VftHl_D0GJ5s",
//   authDomain: "cloth-exchange.firebaseapp.com",
//   databaseURL: "https://cloth-exchange.firebaseio.com",
//   projectId: "cloth-exchange",
//   storageBucket: "cloth-exchange.appspot.com",
//   messagingSenderId: "806312465527",
//   appId: "1:806312465527:web:72c8a32a3ee80c1fa46272",
// };

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, base };
