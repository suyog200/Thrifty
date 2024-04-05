import InputBox from "./InputBox";
import { airlines, destination_cities, source_cities } from "../data/constants";

export default function InputForm() {
  return (
    <div className="inputs">
      <InputBox id="airlines" label="Airlines" Data={airlines} />
      <InputBox id="source" label="Source" Data={source_cities} />
      <InputBox
        id="destination"
        label="Destination"
        Data={destination_cities}
      />
    </div>
  );
}
