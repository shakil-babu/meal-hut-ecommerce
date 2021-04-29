import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyB_yu8NHeMvxb5ZpYwmJqKTPOR7H3l-eBY",
    authDomain: "meal-hut.firebaseapp.com",
    projectId: "meal-hut",
    storageBucket: "meal-hut.appspot.com",
    messagingSenderId: "209015307916",
    appId: "1:209015307916:web:8a74b5e6eb6a40892605a9"
};


export const initializeLoginFramework = () => {
  if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
}
    


export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
   return firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {displayName, email} = result.user;
    const signedInUser = {
        name:displayName, 
        email:email,
    }
    return signedInUser ;
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


// sign in with email and password
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    newUserInfo.name = name ;
    updateUserName(name);
    return newUserInfo;
  })
  .catch( error => {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}


// sign in with email and password
export const signInWithEmailAndPassword = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    return newUserInfo;
  })
  .catch(function(error) {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}


// updateUserName
const updateUserName = name =>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function(res) {
    const {displayName} = res.user ;
    return displayName ;
  }).catch(function(error) {
    console.log(error)
  });
}