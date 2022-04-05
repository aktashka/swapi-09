import React, {useState} from "react";
import { PeopleList, PersonDetails } from "../sw-components";
import Row from "../row";

const PeoplePage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)
    const leftElem = <PeopleList setSelectedItemId={setSelectedItemId} /> 
    const rightElem =  <PersonDetails selectedItemId={selectedItemId} />
    
    return (
    <Row left={leftElem} right={rightElem}/>
    )
}

export {PeoplePage};