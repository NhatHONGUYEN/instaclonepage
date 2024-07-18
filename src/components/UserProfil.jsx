import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);

  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserData = async () => {
      const data = await getDocs(userCollectionRef);
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUserData();
  }, []);

  return (
    <div>
      {userData.map((user) => (
        <div key={user.id}>
          <p>{user.about}</p>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <img src={user.photoURL} alt={user.displayName} />
          <p>{user.uid}</p>
        </div>
      ))}
    </div>
  );
}
