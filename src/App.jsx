import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = 'de3d530165ad44fc64bf45f1ad1a87d6';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-sky-300 text-white flex flex-col items-center pt-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🌤️ Weather App</h1>
      <input
        type="text"
        className="bg-white text-gray-800 placeholder:text-gray-500 py-3 px-6 w-full max-w-xl rounded-3xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        placeholder="Enter city name and press Enter"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchLocation}
      />
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
