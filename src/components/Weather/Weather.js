import React from 'react';

class Weather extends React.Component {
    render() {

        return (
            <div className="weather-container">
                <div className="weather-data">
                    {
                        this.props.temperature &&
                            <h2>{this.props.city} <img src={"https://www.countryflags.io/" + this.props.country +"/shiny/32.png"} id="flag" alt="flag"/></h2>
                    }
                    {
                        this.props.country && this.props.city &&
                        <p><h6>Temperature:</h6>
                            <span>  {this.props.temperature} °C </span>
                        </p>
                    }
                    {
                        this.props.humidity &&
                        <p><h6>Humidity:</h6>
                            <span>  {this.props.humidity} %</span>
                        </p>
                    }
                    {
                        this.props.description &&
                        <p><h6>Conditions:</h6>
                            <span><img src={"http://openweathermap.org/img/w/" + this.props.weather_icon + ".png"} alt="weather" id="imgweather" className="img-fluid d-block mx-auto"/>  <i>~{this.props.description}~</i></span>
                        </p>
                    }
                    </div>
                    {
                        this.props.error &&
                        <p className="alert alert-danger" role="alert">
                            {this.props.error}
                        </p>
                    }
            </div>
        );
    }
}

export default Weather;