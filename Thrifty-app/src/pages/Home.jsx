import { useState } from "react";
import Navbar from "../components/Navbar";
import Video from "../assets/videos/airport.mp4";
import InputForm from "../components/InputForm";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import Table from "../components/Table";

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

  const [predictedData, setPredictedData] = useState([]);

  async function predictFlight() {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    fetch("http://127.0.0.1:5000/predict",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        airline: airlines.id,
        source_city: source.id,
        destination_city: destination.id,
        date: formattedDate.toLocaleLowerCase(),
        f_class: classType.id,
        departure_time: departureTime.id,
        stops: noOfStops.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => 
      setPredictedData(data)
    )
      .catch((error) => console.log(error));
  }

  const handleClick = async () => {
    // perform validation
    if (!airlines) {
      setAirlinesError("Please select an airline");
      return;
    }
    if (!source) {
      setSourceError("Please select a source city");
      return;
    }
    if (!destination) {
      setDestinationError("Please select a destination city");
      return;
    }
    if (!classType) {
      setClassTypeError("Please select a class type");
      return;
    }
    if (!departureTime) {
      setDepartureTimeError("Please select a departure time");
      return;
    }
    if (!noOfStops) {
      setNoOfStopsError("Please select number of stops");
      return;
    }
    if (!date) {
      setDateError("Please select a date");
      return;
    }

    if (destination.id === source.id) {
      setDestinationError("Cannot select same city");
    }
    // convert date to required format
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    console.log(formattedDate);

    // difference between current date and selected date
    const difference = dayjs(formattedDate).diff(dayjs(), "day");
    console.log(difference);

    await predictFlight();

    console.log(airlines, source, destination, formattedDate.toLocaleLowerCase(), classType, departureTime, noOfStops);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-image">
        {/* <img src={Image} alt="Image" /> */}
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
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
          className="search-btn"
          variant="contained"
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
      {
        predictedData.length > 0 && 
        <Table predictedData={predictedData} airlines={airlines?.label} source={source?.label} destination={destination?.label} classType={classType?.label}
        date={dayjs(date).format("YYYY-MM-DD")}
        />
      }
    </div>
  );
};

export default Home;
