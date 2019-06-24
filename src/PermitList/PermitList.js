import React, {Component} from 'react';
import soda from 'soda-js';

class PermitList extends Component {

    state = {
        permits: []
    }

    formatDate(date) {
        return date.toISOString().slice(0, -1);
    }

    componentDidMount() {
        let d1 = new Date(Date.now());
        let d2 = new Date(Date.now());
            d2.setDate(d2.getDate() + 7);

        const consumer = new soda.Consumer('data.cityofchicago.org');
        
        consumer.query()
            .withDataset('c2az-nhru')
            .where("APPLICATIONSTARTDATE between '" + this.formatDate(d1) + "' and '" + this.formatDate(d2) + "'")
            .getRows()
            .on('success', rows => {
                this.setState({permits: rows});
                console.log(this.state);
            });
    }

    render () {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default PermitList;