import Navbar from "../components/Navbar";
import Image from "../assets/images/Img1.jpg";
import InputForm from "../components/InputForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <img src={Image} alt="Image" />
      </div>
      <div className="input-form">
        <InputForm />
      </div>
    </div>
  );
};

export default Home;
