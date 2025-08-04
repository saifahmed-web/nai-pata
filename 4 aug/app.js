import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHoNEae9c29q0WhxCFo7h51qia2CAEjmg",
    authDomain: "dahboard-auth.firebaseapp.com",
    projectId: "dahboard-auth",
    storageBucket: "dahboard-auth.firebasestorage.app",
    messagingSenderId: "740561236117",
    appId: "1:740561236117:web:25e2262b9c94a6f2e42b9c",
    measurementId: "G-420WLYSN2T"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const getSignBtn = document.getElementById("signBtn");
const getemail = document.querySelector("#signEmail")
const getpassword = document.querySelector("#signPassword")

getSignBtn.addEventListener("click", () => {
    let email = getemail.value;
    let password = getpassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("User created successfully:", user);

            email = ""
            password = ""

            location.href = "dashboard.html";
            showData()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error("Error creating user:", errorCode, errorMessage);

        });
})

const getLoginBtn = document.getElementById("loginBtn");

getLoginBtn.addEventListener("click", () => {
    let email = document.querySelector("#logEmail").value;
    let password = document.querySelector("#logPass").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in successfully:", user);

            email = ""
            password = ""

            location.href = "dashboard.html";
            showData()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error("Error logging in:", errorCode, errorMessage);
        });
});

