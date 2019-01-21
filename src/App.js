import React from 'react';
import WeatherForm from "./components/Form/WeatherForm";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

const API_KEY = "7bb630e4173b279b11793ccbac6686d5";

class App extends React.Component {
        state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        };


    getWeather = async (e) => {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const response = await API_CALL.json();
        console.log(response);
        if (city && country) {
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                error:"Please enter search values!"
            })
        }
    };

    componentDidUpdate() {
        if ( this.state.temperature <= 0) {
            return (
                console.log("Its pretty cold man!")
            );
        } else if (this.state.temperature >= 0) {
            return(
                console.log("Its not that cold!")
            );
        }
    }

    render () {
        return (
            <div>
            <div className="container">
                <div className="col-sm ">
                    <Header/>
                </div>
                <div className="col-sm">
                    <WeatherForm loadWeather={this.getWeather} />
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
                    </div>
                <Footer/>
            </div>
            </div>
        )
    }
}

export default App