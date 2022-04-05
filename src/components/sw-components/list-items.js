import React from "react"
import ItemList from '../item-list';
import { withSwapi } from "../hoc";

const PeopleList = withSwapi(
    (props) => <ItemList {...props}/>,
    (swapi) => ({getData: swapi.getAllPeople}),
) 

const PlanetList = withSwapi(
    (props) => <ItemList {...props}/>,
    (swapi) => ({getData: swapi.getAllPlanets}),
) 

const StarshipList = withSwapi(
    (props) => <ItemList {...props}/>,
    (swapi) => ({getData: swapi.getAllStarship})
)

export {PeopleList, PlanetList, StarshipList};