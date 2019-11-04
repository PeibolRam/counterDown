import React, { Component } from 'react';
import loguito from './imgs/logo.png';
import Countdown from 'react-countdown-now';
import './style/counter.css'

const getSeconds = () => {
    let startDate = new Date();
    let endDate   = new Date(2019, 10, 11, 12, 0, 0, 0);
    let seconds = (endDate.getTime() - startDate.getTime());

    return seconds;
}

const Completionist = () => <span>¡Al fin!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    // Render a countdown
    return <div className="d_down">
                <div>
                    <h1>{days}</h1>
                    <h2>Días</h2>
                </div>
                <div>
                    <h1>{hours}</h1>
                    <h2>Horas</h2>
                </div>
                <div>
                    <h1>{minutes}</h1>
                    <h2>Minutos</h2>
                </div>
                <div>
                    <h1>{seconds}</h1>
                    <h2>Segundos</h2>
                </div>
            </div> ;
  }
};
 

getSeconds();

export default  class Counter extends Component {
    render(){
        return(
            <div className="counter">
                <img src={ loguito } alt="logo"/>
                <div className="counter_d">
                    <Countdown date={Date.now() + getSeconds()} renderer={renderer}/>
                </div>
            </div>
        );
    }
}
