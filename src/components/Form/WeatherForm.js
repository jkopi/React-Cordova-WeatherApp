import React from 'react';

class WeatherForm extends React.Component {
    render() {
    return(
        <form onSubmit={this.props.loadWeather}>
            <input type="text" name="city" placeholder="Enter city.." />
            <br/>
            <input type="text" name="country" placeholder="Enter country.." />
            <button>Get Weather</button>
        </form>
    )
    }
}
export default WeatherForm;