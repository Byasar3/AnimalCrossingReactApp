const FishComponent = ({fish}) => {


    
        return(
            <> 


            <div>             
            <li> 
                <img src={`${fish["icon_uri"]}`} alt="fish"/>
                {fish.name["name-EUen"]}   
                <button>Move to inventory</button>
            </li>
            </div>


            </>


        )
    }
    
    
    
    export default FishComponent;