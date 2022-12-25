import clsx from "clsx";
import { data } from "../../assets";
import style from "./Books.module.scss";
import Intro from "./Intro";

const Books = () => {
  const pathName = window.location.pathname.replace("/books/", "");

  const newData = data.filter((x) => {
    return x.path === pathName;
  });

  const mainData = newData[0];

  const handleScroll = () => {
    document
      .getElementsByClassName(clsx(style.content))[0]
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div className={clsx(style.wrapper)}>
      <Intro handleScroll={handleScroll} mainData={mainData} />

      <div className={clsx(style.content)}>
        {mainData.content.map((x, index) => {
          return <p key={index}>{x}</p>;
        })}
      </div>
    </div>
  );
};

export default Books;
