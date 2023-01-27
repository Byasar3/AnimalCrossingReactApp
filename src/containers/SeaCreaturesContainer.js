import { useState, useEffect } from "react";
import SeaCreatureComponent from "../components/SeaCreaturesComponent";


const SeaCreatureContainer = () => {

    const[seaCreatures, setSeaCreatures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://acnhapi.com/v1a/sea/");
            const data = await response.json();
            setSeaCreatures(data);
        }
        fetchData()
    }, [])

    const SeaCreatureComponents = seaCreatures.map((seaCreature) => {
        return <SeaCreatureComponent
                key={seaCreature.id}
                seaCreature={seaCreature}/>
    })

    return (

        <>
        <h2>Sea Creatures:</h2>
        {SeaCreatureComponents}
        </>
    )
}

export default SeaCreatureContainer;