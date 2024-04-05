import InputBox from "./InputBox";
import { airlines } from "../data/constants";

export default function InputForm() {
    return (
        <div>
            <InputBox id="airlines" label="Airlines" Data={airlines}/>
        </div>
    );
}