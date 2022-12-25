import clsx from "clsx";
import style from "./Intro.module.scss";

const Intro = ({ handleScroll, mainData }) => {
  return (
    <div className={clsx(style.header)}>
      <div className={clsx(style.logo)}>
        <img
          className={clsx(style.img)}
          src={mainData.img}
          alt={mainData.name}
        />
      </div>
      <div className={clsx(style.info)}>
        <div className={clsx(style.name)}>{mainData.name}</div>
        <div className={clsx(style.author)}>Tác giả : {mainData.author}</div>
        <div className={clsx(style.category)}>
          Thể loại : {mainData.category}
        </div>
        <h1>Giới thiệu</h1>
        <div className={clsx(style.intro)}>
          {mainData.intro.map((x, index) => {
            return <p key={index}>{x}</p>;
          })}
        </div>
        <div className={clsx(style.read)} onClick={handleScroll}>
          Đọc ngay
        </div>
      </div>
    </div>
  );
};

export default Intro;
