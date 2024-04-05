import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// eslint-disable-next-line react/prop-types
export default function InputBox({ id, label, Data, value, setValue, error, setErrorText }) {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={Data} //provide optiobs
      sx={{ width: 300, backgroundColor: "#fff"}}
      onChange={(event, newValue) => {
        setValue(newValue);
        setErrorText(null);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label={label}
          variant="filled"
          sx={{ backgroundColor: "#fff" }}
          error={error ? true : false}
          helperText={error}
        />
      )}
    />
  );
}
