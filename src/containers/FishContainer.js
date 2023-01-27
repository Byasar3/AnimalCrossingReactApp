import { useEffect, useState } from "react"
import FishComponent from "../components/FishComponent";

const FishContainer = () => {

    const[fishes, setFishes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://acnhapi.com/v1a/fish/");
            const data = await response.json();
            setFishes(data);
        // console.log(data)
        }
        fetchData()   
        
    }, [])

    const fishComponents = fishes.map((fish) => {
        return <FishComponent 
                key={fish.id}
                fish={fish}/>
    })

    return (

        <>
        <h2>Fish:</h2>

        {fishComponents}
        <h3>My inventory:</h3>
        </>
        
        )
}

export default FishContainer;