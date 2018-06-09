import React from "react";
import '../country.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo img-rounded" src={props.country.imageUrl} alt={"flag of " + props.country.name}/>
    </div>
);

export default CountryFlag;