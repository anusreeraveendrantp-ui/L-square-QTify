import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: "#34C94B",
        alignItems: "center", // vertically center content
      }}
    >
      <Logo />
      <Search />
      <Button text="Give Feedback" />
    </div>
  );
};

export default Navbar;
