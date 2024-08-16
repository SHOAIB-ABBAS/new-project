
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYtTccj0ILjDxN0kcrjxCkDxRXQLuPyPA",
    authDomain: "smit-project-440b5.firebaseapp.com",
    projectId: "smit-project-440b5",
    storageBucket: "smit-project-440b5.appspot.com",
    messagingSenderId: "1044926525120",
    appId: "1:1044926525120:web:1f5ec6c83a3430dbb14725",
    measurementId: "G-DQC9FDCD37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
