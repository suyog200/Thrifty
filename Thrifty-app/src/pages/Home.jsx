import Navbar from "../components/Navbar";
import Image from "../assets/images/Img1.jpg";
import InputForm from "../components/InputForm";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <img src={Image} alt="Image" />
      </div>
      <div className="input-form">
        <InputForm />
        <Button
          size="large"
          className="search-btn"
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Home;
