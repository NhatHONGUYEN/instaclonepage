import LeftBar from "../components/LeftBar";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import RightBar from "../components/RightBar";

export default function Home() {
  return (
    <div>
      <LeftBar />
      <NavBar />
      <Post />
      <RightBar />
    </div>
  );
}
