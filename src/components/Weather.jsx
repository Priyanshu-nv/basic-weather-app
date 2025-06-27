import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div className="w-full flex justify-center px-4">
      {weatherData.weather ? (
        <section className="w-full max-w-xl backdrop-blur-md bg-white/20 text-white shadow-xl rounded-xl relative px-6 py-6 mt-6 border border-white/30">
          <div className="flex flex-col md:flex-row justify-between w-full">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex justify-start items-start">
              <div className="flex flex-col justify-between gap-2">
                <div>
                  <p className="text-2xl font-semibold">
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className="text-sm capitalize">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <h1 className="text-3xl font-bold">
                  {weatherData.main.temp.toFixed()} &deg;C
                </h1>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col items-end justify-between mt-4 md:mt-0">
              <img
                className="w-24 md:w-28"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <div className="flex flex-col gap-2 text-xs sm:text-sm mt-4 w-full max-w-xs">
                <div className="flex justify-between">
                  <p>Feels Like</p>
                  <p className="font-semibold">
                    {weatherData.main.feels_like.toFixed()} &deg;C
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Humidity</p>
                  <p className="font-semibold">{weatherData.main.humidity} %</p>
                </div>
                <div className="flex justify-between">
                  <p>Wind Speed</p>
                  <p className="font-semibold">
                    {weatherData.wind.speed.toFixed()} km/h
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Pressure</p>
                  <p className="font-semibold">
                    {weatherData.main.pressure.toFixed()} hPa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Weather;
