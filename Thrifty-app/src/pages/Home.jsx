import {useState} from "react";
import Navbar from "../components/Navbar";
import Image from "../assets/images/Img1.jpg";
import InputForm from "../components/InputForm";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

const Home = () => {
  const [airlines, setAirlines] = useState();
  const [airlinesError, setAirlinesError] = useState(false);

  const [source, setSource] = useState();
  const [sourceError, setSourceError] = useState(false);

  const [destination, setDestination] = useState();
  const [destinationError, setDestinationError] = useState(false);

  const [date, setDate] = useState();
  const [dateError, setDateError] = useState(false);

  const [classType, setClassType] = useState();
  const [classTypeError, setClassTypeError] = useState(false);

  const [departureTime, setDepartureTime] = useState();
  const [departureTimeError, setDepartureTimeError] = useState(false);

  const [noOfStops, setNoOfStops] = useState();
  const [noOfStopsError, setNoOfStopsError] = useState(false);

  const handleClick = () => {
    // perform validation
    if (!airlines) {
      setAirlinesError("Please select an airline");
      // return;
    }
    if (!source) {
      setSourceError("Please select a source city");
      // return;
    }
    if (!destination) {
      setDestinationError("Please select a destination city");
      // return;
    }
    if (!classType) {
      setClassTypeError("Please select a class type");
      // return;
    }
    if (!departureTime) {
      setDepartureTimeError("Please select a departure time");
      // return;
    }
    if (!noOfStops) {
      setNoOfStopsError("Please select number of stops");
      // return;
    }
    if (!date) {
      setDateError("Please select a date");
      return;
    }
    // convert date to required format
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    console.log(formattedDate);

    // difference between current date and selected date
    const difference = dayjs(formattedDate).diff(dayjs(), "day");
    console.log(difference);

    console.log(airlines, source, destination, formattedDate.toLocaleLowerCase(), classType, departureTime, noOfStops);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <img src={Image} alt="Image" />
      </div>
      <div className="input-form">
        <InputForm 
          airliness={airlines}
          setAirlines={setAirlines}
          airlinesError={airlinesError}
          setAirlinesError={setAirlinesError}

          source={source}
          setSource={setSource}
          sourceError={sourceError}
          setSourceError={setSourceError}

          destination={destination}
          setDestination={setDestination}
          destinationError={destinationError}
          setDestinationError={setDestinationError}

          date={date}
          setDate={setDate}
          dateError={dateError}
          setDateError={setDateError}

          classType={classType}
          setClassType={setClassType}
          classTypeError={classTypeError}
          setClassTypeError={setClassTypeError}

          departureTime={departureTime}
          setDepartureTime={setDepartureTime}
          departureTimeError={departureTimeError}
          setDepartureTimeError={setDepartureTimeError}

          noOfStops={noOfStops}
          setNoOfStops={setNoOfStops}
          noOfStopsError={noOfStopsError}
          setNoOfStopsError={setNoOfStopsError}
        />
        <Button
          size="large"
          sx={{ mt: "25px", width: "220px" }}
          className="Search-btn"
          variant="contained"
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Home;
