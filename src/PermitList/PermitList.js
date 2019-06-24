import React, {Component} from 'react';
import soda from 'soda-js';
import Permit from '../Permit/Permit';

class PermitList extends Component {

    state = {
        permits: [],
        isLoading: true
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
                this.setState({isLoading: false});
                console.log(this.state);
            });
    }

    render () {
        const { permits, isLoading } = this.state;
        if(isLoading) { return <div> Loading </div> }
        else {
            console.log(this.state);
            return (
                <div>
                    <h1>Permit List</h1>
                    <table>
                        {this.state.permits.map(perm=>(
                            <Permit name={perm.applicationname}
                                    number={perm.applicationnumber}
                                    desc={perm.applicationdescription}
                                    status={perm.applicationstatus}
                                    milestone={perm.currentmilestone}
                                    lat={perm.latitude}
                                    long={perm.longitude}
                                    address={perm.detail} />
                        ))}
                    </table>
                </div>
            );
        }
    }
}

export default PermitList;