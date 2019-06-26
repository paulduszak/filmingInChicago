import React, {Component} from 'react';
import './Permit.css';

class Permit extends Component {

    render() {
        return (
            <div className="row row-striped">
                <div className="col-2 text-right">
                    <h1 className="display-4"><span className="badge badge-secondary">23</span></h1>
                    <h2>OCT</h2>
                </div>
                <div className="col-10">
                    <h3 className="text-uppercase"><strong>{this.props.name}</strong></h3>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Monday</li>
                        <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li>
                        <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Cafe</li>
                    </ul>
                    <p>{this.props.comments}</p>
                </div>
            </div>
        );
    }
}

export default Permit;