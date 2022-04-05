import React, {useState} from "react";
import {StarshipList, StarshipDetails} from '../sw-components'
import Row from "../row";

const StarshipPage = () => {
    const [selectedItemId, setSelectedItemId] = useState(3)

    const leftElement = <StarshipList setSelectedItemId={setSelectedItemId}/>
    const rightElement = <StarshipDetails selectedItemId={selectedItemId}/>

    return <Row left={leftElement} right={rightElement}/>
}

export {StarshipPage};