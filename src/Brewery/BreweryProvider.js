import React, { Component } from 'react';
import BreweryTable from './BreweryTable'

class BreweryProvider extends Component {
    state = {
        data: [],                   // Array of breweries
        loaded: false,              // boolean variable of whether the breweries are loaded or not
        currentId: 0,               // current brewery id default is 0
        placeholder: "Loading Breweries..."
    };
    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries')
            .then(response => {
                if (response.status !== 200) {
                    console.log("Server Error");
                }
                return response.json();
            })
            .then(data => {
                this.setState({data: data, loaded: true});
            });
    }
    render() {
        return (
        <div>
            <BreweryTable breweries={this.state.data}/>
        </div>
        );
    }
}

export default BreweryProvider;