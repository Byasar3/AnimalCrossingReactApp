import { useEffect, useState } from "react"
import FishComponent from "../components/FishComponent";

const FishContainer = () => {

    const[fishes, setFishes] = useState([]);
    // const[fishIcon, setFishIcon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ("http://acnhapi.com/v1a/fish/");
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

    // useEffect(() => {
    //     const fetchIconData = async () => {
    //         const response = await fetch ("https://acnhapi.com/v1/icons/fish/");
    //         const data = await response.json();
    //         setFishIcon(data);
    //         console.log(response)
    //     }
    //     fetchIconData()
    // })

    // const fishIconComponents = fish.map((f) => {
    //     return <FishComponent fishIcon={f}/>
    // })
   


//  {fishIconComponents} 
    return (

        <>
        <h2>Fish:</h2>
        {fishComponents}

        </>
        
        )
}

export default FishContainer;