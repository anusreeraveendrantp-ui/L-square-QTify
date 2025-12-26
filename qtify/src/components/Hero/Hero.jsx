import headphones from "../../assets/vibrating-headphone.png";

const Hero = () => {
  return (
    <div style={{ display: "flex", padding: "40px", background: "black", color: "white" }}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>
      <img src={headphones} alt="headphones" height={200} />
    </div>
  );
};

export default Hero;
