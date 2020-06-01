import React, { Component } from 'react';


let birthday =  [ new Date(1986,0,26) ];
let utc =  new Date(Date.now()) ;
const EST = utc.getTimezoneOffset() * (60 * 1000);
let today =  Date.now() - EST;
let time = today - birthday[0];
let sol = Math.round(time / (1000 * 3600 * 24)).toLocaleString(); 
console.log(today, utc.getTimezoneOffset() * (60 * 1000), birthday[0]);
class SolCount extends Component {
    render() { 
        return ( <h1>SOL {sol}</h1> );
    }
}
 
export default SolCount;