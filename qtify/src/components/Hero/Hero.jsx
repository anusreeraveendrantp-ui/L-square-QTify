import headphones from "../../assets/vibrating-headphone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.text}>
          <h1>100 Thousand Songs, ad-free</h1>
          <p>Over thousands of podcast episodes</p>
        </div>

        <img
          src={headphones}
          alt="headphones"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Hero;