import { addDoc, collection } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../api/firebaseConfig";

export default function EditPost() {
  const location = useLocation();
  const imageUrl = location.state.imageUrl;
  const [post, setPost] = useState("");

  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postCollectionRef, { imageUrl, post });
    // Clear the input fields after submission

    setPost("");

    navigate("/home");
  };

  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="flex justify-center  gap-16 max-w-7xl mx-auto">
        <div className="flex mt-24 overflow-hidden bg-slate-50 rounded-xl flex-col">
          <div className="w-full flex items-center  justify-between rounded-t-lg h-10 shadow-md">
            <div>
              <ArrowLeft />
            </div>
            <p className="text-center">Crée une publication</p>
            <button onClick={createPost}>Partager</button>
          </div>

          <div className="flex">
            <img
              className="object-cover max-w-2xl"
              src={imageUrl}
              alt="Uploaded"
            />
            <div className="flex w-52 pt-10 pl-3 flex-col">
              <div className="flex items-center gap-4">
                <div className=" h-16 w-16 shrink-0 rounded-full">
                  <img
                    className="rounded-full"
                    src="../../nhatprofilinsta.jpg"
                    alt=""
                  />
                </div>

                <div className=" h-4 w-20">Nhatflux</div>
              </div>
              <textarea
                className="textarea w-full mt-10 h-72"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
