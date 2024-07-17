import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../api/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      const imagePostRef = ref(storage, `imagePost/${image.name}`);
      try {
        const snapshot = await uploadBytes(imagePostRef, image);
        console.log("Uploaded a blob or file!");
        const url = await getDownloadURL(snapshot.ref);
        console.log("Download URL:", url);
        navigate("/editpost", { state: { imageUrl: url } });
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    } else {
      console.error("No image selected");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded preview" />}
    </form>
  );
}
