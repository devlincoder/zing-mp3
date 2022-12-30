import clsx from "clsx";
import style from "./Home.module.scss";
import Slideshow from "./Slideshow";

const Home = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <Slideshow />
    </div>

  );
};

export default Home;
