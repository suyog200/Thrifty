const airlines_raw = [
  "SpiceJet",
  "AirAsia",
  "Vistara",
  "GO_FIRST",
  "Indigo",
  "Air_India",
];
export const airlines = airlines_raw
  .sort()
  .map((airline, index) => ({ label: airline, id: index }));

const source_cities_raw = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
  "Chennai",
];
export const source_cities = source_cities_raw
  .sort()
  .map((city, index) => ({ label: city, id: index }));

const destination_cities_raw = [
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
  "Chennai",
  "Delhi",
];
export const destination_cities = destination_cities_raw
  .sort()
  .map((city, index) => ({ label: city, id: index }));

const classes_raw = ["Economy", "Business"];
export const classes = classes_raw
  .sort()
  .map((class_type, index) => ({ label: class_type, id: index }));

const departure_times_raw = ['Night','Morning','Early_Morning','Afternoon','Evening','Late_Night'];
export const departure_times = departure_times_raw.sort().map((time, index) => ({label: time, id: index}));

const no_of_stops_raw = ['0 Stops','1 Stops','2 or more stops'];
export const no_of_stops = no_of_stops_raw.sort().map((stops, index) => ({label: stops, id: index}));