import React, {Component} from 'react';

class Permit extends Component {

    render() {
        const { name, number, desc, address, status, milestone, lat, long } = this.props;
        var mapString = "https://www.google.com/maps/?q="+lat+","+long;
        var rowColor="#ccc";
        if(status == "Open"){
            rowColor = "#a5fba5";
        }
        return (
            <tr key={number} style={{backgroundColor:rowColor}}>
                <td> {name} </td>
                <td> {number} </td>
                <td> {desc} </td>
                <td> {status} </td>
                <td> {milestone} </td>
                <td> {address} </td>
                <td> <a href={mapString} target="_blank">Map</a> </td>
            </tr>
        );
    }
}

export default Permit;