import React from "react";
import PropTypes from "prop-types";

import './BreweryTable.css';

const BreweryTable = ({ breweries }) => (
    <div>
        <h2 className="subtitle">
            Breweries
        </h2>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Brewery Type</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Phone Number</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {breweries.map(brewery => (
                <tr 
                    key={brewery.id}>
                    <td>{brewery.id}</td>
                    <td>{brewery.name}</td>
                    <td>{brewery.brewery_type}</td>
                    <td>{brewery.street}</td>
                    <td>{brewery.city}</td>
                    <td>{brewery.state}</td>
                    <td>{brewery.postal_code}</td>
                    <td>{brewery.phone}</td>
                    <td>{brewery.website_url}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

BreweryTable.propTypes = {
    breweries: PropTypes.array.isRequired
};

export default BreweryTable;