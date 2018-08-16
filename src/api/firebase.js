import firebase from 'firebase';
import Rebase from 're-base';


  const config = {
    apiKey: "AIzaSyCrUoSFzjfjiFFjBhOxSG5YTupD5d6LT6w",
    authDomain: "mentr-6a4e7.firebaseapp.com",
    databaseURL: "https://mentr-6a4e7.firebaseio.com",
    projectId: "mentr-6a4e7",
    storageBucket: "mentr-6a4e7.appspot.com",
    messagingSenderId: "383852938770"
  };
  const app = firebase.initializeApp(config);
  const base =Rebase.createClass(app.database());
  const facebookProvider=new firebase.auth.FacebookAuthProvider();

  export {app, base, facebookProvider}
