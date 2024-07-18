// UserProfil.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function UserProfil() {
  const { uid } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setUserData(doc.data());
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [uid]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        <strong>About:</strong> {userData.about}
      </p>
      <p>
        <strong>Display Name:</strong> {userData.displayName}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>First Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastName}
      </p>
      <img src={userData.photoURL} alt="User Profile" />
    </div>
  );
}
