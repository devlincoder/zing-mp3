import Header from "./components/Header";
import Footer from "./components/Footer";
import clsx from "clsx";
import style from "./Layout.module.scss";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={clsx(style.wrapper)}>
      <Sidebar />
      <div className={clsx(style.container)}>
        <Header />
        <div className={clsx(style.content)}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
