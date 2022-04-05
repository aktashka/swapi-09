import React from "react"
import ItemDetails from "../item-details";
import {withSwapi} from '../hoc';

const PersonDetails = withSwapi(
    (props) => <ItemDetails {...props}/>,
    (swapi) => ({getData: swapi.getPerson})
)

const PlanetDetails = withSwapi(
    (props) => <ItemDetails {...props}/>,
    (swapi) => ({getData: swapi.getPlanet})
)

const StarshipDetails = withSwapi(
    (props) => <ItemDetails {...props}/>,
    (swapi) => ({getData: swapi.getStarship})
)

export {PersonDetails,PlanetDetails, StarshipDetails}