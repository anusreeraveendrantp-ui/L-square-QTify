import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import style from "./Navbar.module.css";
const Navbar = ({ searchData }) => {
  return (
    <div
      className={style.navbar}
    >
      <Logo />
      <Search data={searchData}/>
      <Button text="Give Feedback" />
    </div>
  );
};

export default Navbar;
