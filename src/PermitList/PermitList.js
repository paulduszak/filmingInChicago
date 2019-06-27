import React, {Component} from 'react';
import soda from 'soda-js';

import Permit from '../Permit/Permit';

class PermitList extends Component {

    state = {
        permits: []
    }

    formatDate(date) {
        return date.toISOString().slice(0, -1);
    }

    componentDidMount() {
        //TODO: Find a better way to implement date ranges -- moment.js?
        let d1 = new Date(Date.now());
        let d2 = new Date(Date.now());
            d2.setDate(d2.getDate() + 7);

        const consumer = new soda.Consumer('data.cityofchicago.org');
        
        consumer.query()
            .withDataset('c2az-nhru')
            .select("distinct applicationnumber, applicationstartdate, applicationenddate, applicationname, streetnumberfrom, streetnumberto, direction, streetname, comments")
            .where("APPLICATIONSTARTDATE between '" + this.formatDate(d1) + "' and '" + this.formatDate(d2) + "'")
            .order("applicationstartdate")
            .getRows()
            .on('success', rows => {
                this.setState({permits: rows});
                console.log(this.state);
            });
    }

    render () {
        const permits = this.state.permits.map((permit, key) => {
            return <Permit 
                key={permit.applicationnumber}
                startDate={permit.applicationstartdate}
                endDate={permit.applicationenddate}
                name={permit.applicationname}
                streetFrom={permit.streetnumberfrom}
                streetTo={permit.streetnumberto}
                streetDirection={permit.direction}
                streetName={permit.streetname}
                comments={permit.comments}
            />
        })

        return (
            <div className="container">
                {permits}
            </div>
        );
    }
}

export default PermitList;