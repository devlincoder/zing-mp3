import {
  faArrowLeft,
  faArrowRight,
  faArrowUpFromBracket,
  faGear,
  faMagnifyingGlass,
  faShirt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import style from "./Header.module.scss";

const Header = () => {
  const backHistory = () => {
    window.history.back();
  };

  const forwardHistory = () => {
    window.history.forward();
  };

  return (
    <div className={clsx(style.wrapper)}>
      {/* ------------------LEFT--------------------- */}
      <div className={clsx(style.left)}>
        <div className={clsx(style.historyBtn)} onClick={backHistory}>
          <FontAwesomeIcon icon={faArrowLeft} className={clsx(style.icon)}/>
        </div>
        <div className={clsx(style.historyBtn)} onClick={forwardHistory}>
          <FontAwesomeIcon icon={faArrowRight} className={clsx(style.icon)}/>
        </div>
        <div className={clsx(style.search)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={clsx(style.icon)}/>
          <input spellCheck="false" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."/>
          <FontAwesomeIcon icon={faXmark} className={clsx(style.icon)}/>
        </div>
      </div>

      {/* --------------------RIGHT----------------------- */}
      <div className={clsx(style.right)}>
        <div className={clsx(style.btn)}>
          <FontAwesomeIcon icon={faShirt} />
        </div>
        <div className={clsx(style.btn)}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </div>
        <div className={clsx(style.btn)}>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className={clsx(style.avatar)}>
          <img
            src="https://i.pinimg.com/564x/f8/fa/d2/f8fad2b691d51fe8514f0bb5f4b2e53f.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
