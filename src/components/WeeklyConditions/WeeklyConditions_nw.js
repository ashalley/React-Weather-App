import React from 'react';
import classes from './WeeklyConditions.module.css';

var moment = require('moment');



const WeeklyConditions_nw = (props) => {
  return (
    <div className={classes.Wrapper}>

      {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

      {props.loading && <div className={classes.Loader} />}

      {props.responseObjs.cod === 200 ?
        <div>
           <div>
           <img src={`https://openweathermap.org/img/wn/${props.responseObjs.weather[0].icon}@2x.png`}/>
           </div>
          <p>
            <strong>{props.responseObjs.name}</strong>
          </p>
          <p>It is currently {Math.round(props.responseObjs.main.temp)} degrees out with {props.responseObjs.weather[0].description}.</p>
          <p><strong>High: {Math.round(props.responseObjs.main.temp_max)}</strong> / Low: {Math.round(props.responseObjs.main.temp_min)}</p>
        </div>
      : null
      }
    </div>
  )
}

export default WeeklyConditions_nw;
