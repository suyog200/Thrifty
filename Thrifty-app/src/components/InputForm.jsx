// import * as React from "react";
import { useState } from "react";
import InputBox from "./InputBox";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  airlines,
  classes,
  destination_cities,
  source_cities,
} from "../data/constants";

export default function InputForm() {
  const [value, setValue] = useState();

  return (
    <>
      <div className="inputs">
        <InputBox id="airlines" label="Airlines" Data={airlines} />
        <InputBox id="Departure" label="Departure" Data={source_cities} />
        <InputBox
          id="destination"
          label="Destination"
          Data={destination_cities}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker"]}
            sx={{ paddingTop: "0", overflow: "visible", width: "100%" }}
          >
            <DatePicker
              label="Date of Departure"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{ backgroundColor: "#fff", flex: 1 }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <InputBox id="class" label="Class" Data={classes} />
      </div>
    </>
  );
}
