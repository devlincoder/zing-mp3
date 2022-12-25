import clsx from "clsx";
import { Link } from "react-router-dom";
import { data } from "../../../assets";
import style from "./BooksList.module.scss";

const BooksLists = () => {

  return (
    <div className={clsx(style.list)}>
      {data.map((x, index) => {
        return (
          <Link key={index} to={`/books/${x.path}`} className={clsx(style.item)}>
            <img src={x.img} alt={x.name} />
            <h1>{x.name}</h1>
            <p>{x.category}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BooksLists;
