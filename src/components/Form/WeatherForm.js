import React from 'react';


class WeatherForm extends React.Component {

    render() {
    return(
        <form onSubmit={this.props.loadWeather}>
            <div>
                <input type="text"
                       name="city"
                       className="form-control"
                       placeholder="Enter city"
                />
            <br/>
                {/*<input type="text" name="country" className="form-control" placeholder="Enter country" />*/}
                <br/>
                <div className="btn-container">
                    <button className="btn btn-primary btn-lg">Get Weather!</button>
                </div>
                <br/>
            </div>
        </form>
    )
    }
}
export default WeatherForm;