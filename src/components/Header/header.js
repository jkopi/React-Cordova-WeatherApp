import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row justify-content-center" id="header">
                <div className="col-10">
                    <h3 className="text-center" id="title">
                        Yet Another Weather Application
                    </h3>
                </div>
            </div>
        );
    }
}

export default Header;