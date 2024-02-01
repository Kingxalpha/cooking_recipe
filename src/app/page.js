import Explore from "@/component/landingpage/Explore";
import Featured from "@/component/landingpage/Featured";
import Heropage from "@/component/landingpage/Heropage";
import Navbar from "@/component/landingpage/Navbar";
import Recipez from "@/component/landingpage/Recipez";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <Explore/>
      <Featured/>
      <Recipez/>
    </div>
  );
}
