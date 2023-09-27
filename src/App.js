import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HawkNav from "./components/HawkNav";
import Unlock1 from "./components/Unlock1";
import Themes2 from "./components/Themes2";
import Resume6 from "./components/Resume6";
import Asked8 from "./components/Asked8";
import Path9 from "./components/Path9";
import Footer from "./components/Footer";
import Help4 from "./components/Help4";
import Powerfull3 from "./components/Powerfull3";
import Twenty5 from "./components/Twenty5";
import Client7 from "./components/Client7";
import UnlockSlider from "./components/UnlockSlider";
import BackToTop from "./components/BackToTop";
import MyPreloader from "./components/MyPreloader"
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <BackToTop />
        <MyPreloader/>
        <HawkNav />
        <Unlock1 />
        <UnlockSlider />c
        <Themes2 />
        <Powerfull3 />
        <Help4 />
        <Twenty5 />
        <Resume6 />
        <Client7 />
        <Asked8 />
        <Path9 />
        <Footer />
      </div>
    </>
  );
}

export default App;
