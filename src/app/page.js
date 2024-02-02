import About from "@/component/landingpage/About";
import Explore from "@/component/landingpage/Explore";
import Featured from "@/component/landingpage/Featured";
import Footer from "@/component/landingpage/Footer";
import Heropage from "@/component/landingpage/Heropage";
import Navbar from "@/component/landingpage/Navbar";
import Recipez from "@/component/landingpage/Recipez";
import Subscribe from "@/component/landingpage/Subscribe";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <Explore/>
      <Featured/>
      <Recipez/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
