import { useEffect, useState } from "react";
import PageWeather from "../components/PageWeather";

export default function Main() {
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("London");
  const [weather, setWeather] = useState();
  const handleClick = (name) => {
    setSelectedCity(name);
  };

  useEffect(() => {
      fetch("https://countriesnow.space/api/v0.1/countries/capital/")
        .then((response) => response.json())
        .then((response) => {
          setCities(response);
        })
        .catch((err) => console.error(err));
      console.log(cities);
    }, []);
  

    
    useEffect(() => {
      fetch(
        `http://api.weatherstack.com/current?access_key=5c4d64c114b0322c2b3cb0ec4a031979&query=${selectedCity}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setWeather(response);
        })
        .catch((err) => console.error(err));
      console.log(weather);
    }, [selectedCity]);

    if (!cities || !weather) {
      return <div>Loading...</div>;
    }
    console.log(weather);

  return (
    <div className="cointainer">
     
    <PageWeather cities={cities} weather={weather} handleClick={handleClick} />
    {/* <PageWeather  /> */}
  </div>
      
    
  )
}
