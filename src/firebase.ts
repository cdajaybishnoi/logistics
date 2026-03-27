import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCs6sPyqjNL5fBSyFp2J95CDzJunPTbsq0",
  authDomain: "car-tracking-system-19687.firebaseapp.com",
  projectId: "car-tracking-system-19687",
  storageBucket: "car-tracking-system-19687.firebasestorage.app",
  messagingSenderId: "488731050389",
  appId: "1:488731050389:web:abcd55988baf98df03b69c",
  measurementId: "G-7NV1EEMPKW"
};

const app = initializeApp(firebaseConfig);

// ✅ Firestore
export const db = getFirestore(app);

// ✅ Analytics (safe for build)
if (typeof window !== "undefined") {
  getAnalytics(app);
}