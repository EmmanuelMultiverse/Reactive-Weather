import React, {useState} from 'react';
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";
import Form from './components/Form';


function App() {

    const [location, setLocation] = useState("London");
    
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <Form location={location} setLocation={setLocation} />
            <div className = "app">
                <Location data={cities} location={location} setLocation={setLocation} />
                {/* Render components here */}
                {cities.map((city, index) => <WeatherCard key={index} city={city}/>)}
            </div>
        </>
    )
}

export default App;