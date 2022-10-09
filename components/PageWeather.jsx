import Image from "next/image";

const PageWeather = ({ cities, weather, handleClick }) => {
  return (
    <div className="col-9"
      style={{
        display: "flex",
        justifyContent: "space-between",
       
        // height: "100vh",
      }}
    >
    <div className="left ">
    
        <div className="imgw"><Image className="imgw" src={weather.current.weather_icons[0]} width={50} height={50} /></div> 
        <p className="temp"> {weather.current.temperature}°C</p>
        <div className="nameCity">
          <p className="country">{weather.location.country}/</p>
          <p className="city">{weather.location.name} </p> 
        </div>        
        <p className="weather-desc">
          {/* {weather.current.weather_descriptions[0]} */}
          </p>
        </div>
    <div className="select-head" style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          height: "250px",
          overflow: "auto",
        }}
      >
          {cities.data.map((city,key) => (
              <span
              key={key}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(city.capital);
            }}
          >
            {city.capital}
          </span>
        ))}
      </div> 
    </div>
  );
};

export default PageWeather;
