import LeftBar from "../components/LeftBar";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import RightBar from "../components/RightBar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <LeftBar />
      <NavBar />
      <Post />
      <RightBar />
    </div>
  );
}
