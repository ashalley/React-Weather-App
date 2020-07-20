import React, {useState} from 'react';
import WeeklyConditions from '../WeeklyConditions/WeeklyConditions';
import WeeklyConditions_nw from '../WeeklyConditions/WeeklyConditions_nw';
import classes from './WeeklyForecast.module.css';
import DayCard from '../DayCard/DayCard';



const WeeklyForecast = () => {
     let [city, setCity] = useState('');
     let [unit, setUnit] = useState('imperial');
     let [responseObjs, setResponseObjs] = useState({});
     let [error, setError] = useState(false);
     let [loading, setLoading] = useState(false);



   function getWeeklyForecast(e) {
     e.preventDefault();

      //if (location.length === 0) {
        //return setError(true);
     //}

     //setError(false);
     setResponseObjs({});
      //setLoading(true);

     const uriEncodedCity = encodeURIComponent(city);


     fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=${unit}&q=${uriEncodedCity}`, {
       "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY

        }
 })

    .then(responses => responses.json())
    .then(responses => {
        //if (responses.cod !== 200) {
          //throw new Error()
        //}
      setResponseObjs(responses);
        //setLoading(false);
  })

    //.catch(err => {
      //setError(true);
      //setLoading(false);
      //console.log(err.message);
    //});

   }

   return (
     <div>
         <h2>Find 5-Day Weather Conditions</h2>
         <form onSubmit={getWeeklyForecast}>
        {JSON.stringify(responseObjs)}
         <br/><br/>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="unit"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="unit"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get 5-Day Forecast</button>
            </form>
         <WeeklyConditions />
         <WeeklyConditions_nw
            responseObjs = {responseObjs}
            //error = {error}
            //loading = {loading}
         />
     </div>
   )
}

export default WeeklyForecast;
