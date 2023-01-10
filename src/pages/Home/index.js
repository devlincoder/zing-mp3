import clsx from "clsx";
import BestMusic from "./BestMusic";
import style from "./Home.module.scss";
import Slideshow from "./Slideshow";

const Home = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <Slideshow />
      <BestMusic />
    </div>

  );
};

export default Home;
