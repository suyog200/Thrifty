import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// eslint-disable-next-line react/prop-types
export default function InputBox({ id, label, Data }) {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={Data} //provide optiobs
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="filled"
          sx={{ backgroundColor: "#fff" }}
        />
      )}
    />
  );
}
