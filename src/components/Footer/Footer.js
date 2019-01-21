import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-text">
                <hr/>
                <p><i>Made with <b>Apache Cordova</b>, <b>React.js</b> and <b>Openweathermap API</b></i></p>
                <i className="wi wi-night-sleet"></i>
            </div>
        );
    }
}

export default Footer;