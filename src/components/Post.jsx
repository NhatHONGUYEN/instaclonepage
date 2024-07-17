import { collection, getDocs } from "firebase/firestore";
import { Dot, Heart, MessageCircle, Send, Smile } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import PreCard from "./PreCard.jsx";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div className="mx-auto h-full max-w-7xl mt-20 sm:px-6 flex flex-col justify-center items-center lg:px-8">
      {posts.map((post) => (
        <div key={post.id} className="card   bg-base-100 max-w-xl shadow-xl ">
          <div className="flex w-full  flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
                <img
                  className="rounded-full"
                  src="../../public/nhatprofilinsta.jpg"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex text-sm font-semibold h-4 w-20">
                  Nhatflix <Dot /> 5j
                </div>
                <div className="h-4 w-28">Audio d'origine</div>
              </div>
            </div>
            <div className="h-[600px] w-full">
              <img src={post.imageUrl || "placeholder-image-url"} alt="Post" />
            </div>
          </div>
          <div className="card-body">
            <div className="flex gap-3 items-center">
              <Heart /> <MessageCircle /> <Send />
            </div>
            <div className="flex">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar"></div>
                <div className="avatar">
                  <div className="w-5 h-5 ml-2">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-5 h-5 ml-2">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-5 h-5 ml-2">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <p className="pl-8 font-semibold">308 J'aime</p>
              </div>
            </div>
            <h2 className="card-title">
              <p>{post.post || "No post content available"}</p>
            </h2>
            <p>Afficher les 43 commentaires</p>
            <p className="flex justify-between">
              leetheruggeds The best life <Heart size={16} strokeWidth={0.5} />
            </p>
            <p className="flex justify-between">
              littleshao My man ❤️ <Heart size={16} strokeWidth={0.5} />
            </p>
            <div className="card-actions flex justify-between items-center">
              <input
                type="text"
                placeholder="Ajouter un commentaire..."
                className="input w-full max-w-xs"
              />
              <Smile size={16} strokeWidth={0.5} />
            </div>
          </div>
          <PreCard /> {/* move the PreCard component inside the map function */}
        </div>
      ))}
    </div>
  );
}
