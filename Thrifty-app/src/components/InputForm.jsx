// import * as React from "react";
import { useState } from "react";
import InputBox from "./InputBox";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  airlines,
  departure_times,
  classes,
  destination_cities,
  source_cities,
  no_of_stops,
} from "../data/constants";

export default function InputForm({
    airliness,
    setAirlines,
    airlinesError,
    setAirlinesError,

    source,
    setSource,
    sourceError,
    setSourceError,

    destination,
    setDestination,
    destinationError,
    setDestinationError,

    date,
    setDate,
    dateError,
    setDateError,

    classType,
    setClassType,
    classTypeError,
    setClassTypeError,

    departureTime,
    setDepartureTime,
    departureTimeError,
    setDepartureTimeError,

    noOfStops,
    setNoOfStops,
    noOfStopsError,
    setNoOfStopsError,
}) {

  return (
    <>
      <div className="inputs">
        <InputBox 
            id="airlines" 
            label="Airlines" 
            Data={airlines} 
            value={airliness} 
            setValue={setAirlines} 
            error={airlinesError}
            setErrorText={setAirlinesError}
        />
        <InputBox 
            id="Departure" 
            label="Departure" 
            Data={source_cities} 
            value={source} 
            setValue={setSource} 
            error={sourceError}
            setErrorText={setSourceError}
        />
        <InputBox
            id="destination"
            label="Destination"
            Data={destination_cities}
            value={destination}
            setValue={setDestination}
            error={destinationError}
            setErrorText={setDestinationError}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker"]}
            sx={{ paddingTop: "0", overflow: "visible", width: "100%" }}
          >
            <DatePicker
              label="Date of Departure"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              sx={{ flex: 1 }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <InputBox 
            id="class" 
            label="Class" 
            Data={classes} 
            value={classType} 
            setValue={setClassType} 
            error={classTypeError}
            setErrorText={setClassTypeError}
        />
        <InputBox 
            id="class" 
            label="Departure times" 
            Data={departure_times} 
            value={departureTime} 
            setValue={setDepartureTime} 
            error={departureTimeError}
            setErrorText={setDepartureTimeError}
        />
        <InputBox 
            id="class" 
            label="no of stops" 
            Data={no_of_stops} 
            value={noOfStops} 
            setValue={setNoOfStops} 
            error={noOfStopsError}
            setErrorText={setNoOfStopsError}
        />
      </div>
    </>
  );
}
