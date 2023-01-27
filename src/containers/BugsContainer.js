import { useEffect, useState } from "react";
import BugsComponent from "../components/BugsComponent";

const BugsContainer = () => {

    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://acnhapi.com/v1a/bugs/");
            const data = await response.json();
            setBugs(data);
        }
        fetchData()
    })

    const bugComponents = bugs.map((bug) => {
        return <BugsComponent
                key={bug.id}
                bug={bug}/>
    })

    return (

        <>
        <h2>Bugs:</h2>
        {bugComponents}
        </>
    )
}

export default BugsContainer;
