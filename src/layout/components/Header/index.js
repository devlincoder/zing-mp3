import clsx from "clsx";
import style from "./Header.module.scss"

const Header = () => {
    return ( 
        <div className={clsx(style.wrapper)}>
            <h1>Header</h1>
        </div>
     );
}
 
export default Header;