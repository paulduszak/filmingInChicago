import React, {Component} from 'react';
import './Permit.css';

class Permit extends Component {

    applicationStartDate = new Date(this.props.startDate);
    applicationEndDate = new Date(this.props.endDate);
    
    startDate = {
        month: new Intl.DateTimeFormat('en-US', {'month':'long'}).format(this.applicationStartDate),
        day: new Intl.DateTimeFormat('en-us', {'day':'2-digit'}).format(this.applicationStartDate),
        year: new Intl.DateTimeFormat('en-us', {'year':'numeric'}).format(this.applicationStartDate)
    };

    endDate = {
        month: new Intl.DateTimeFormat('en-US', {'month':'long'}).format(this.applicationEndDate),
        day: new Intl.DateTimeFormat('en-us', {'day':'2-digit'}).format(this.applicationEndDate),
        year: new Intl.DateTimeFormat('en-us', {'year':'numeric'}).format(this.applicationEndDate)
    };

    render() {
        return (
            <div className="row row-striped">
                <div className="col-2 text-right">
                    <h2><span className="badge badge-secondary">{(this.startDate.day === this.endDate.day) ? this.startDate.day : this.startDate.day + " - " + this.endDate.day}</span></h2>
                    <h4>{this.startDate.month}</h4>
                </div>
                <div className="col-10">
                    <h3 className="text-uppercase"><strong>{this.props.name}</strong></h3>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i>{this.props.streetFrom + " - " + this.props.streetTo + " " + this.props.streetDirection + " " + this.props.streetName}</li>
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