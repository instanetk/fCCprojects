import React, { Component } from 'react';


let birthday =  [ new Date(1986,0,26) ];
// let today =  [ new Date(Date.now()).toLocaleString('en-US', { timeZone: 'America/New_York' }) ];
let today =  Date.now();
let time = today - birthday[0];
let sol = Math.round(time / (1000 * 3600 * 24)).toLocaleString(); 

class SolCount extends Component {
    render() { 
        return ( <h1>SOL {sol}</h1> );
    }
}
 
export default SolCount;