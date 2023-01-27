const BugsComponent = ({bug}) => {

    return (
        <>
        
        <li>
            <img src={`${bug["icon_uri"]}`} alt="bug"/>
            {bug.name["name-EUen"]}
        </li>
        </>
    )
}

export default BugsComponent;