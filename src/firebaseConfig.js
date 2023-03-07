import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGZdOXMVPVeA8_QjuzBJtAYpWObzCpYn8",
  authDomain: "coder-workshop.firebaseapp.com",
  projectId: "coder-workshop",
  storageBucket: "coder-workshop.appspot.com",
  messagingSenderId: "224973313719",
  appId: "1:224973313719:web:106ef551f78b428f3ddf32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app);

export default db;