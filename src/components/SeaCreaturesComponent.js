const SeaCreatureComponent = ({seaCreature}) => {

    return (
        <>
        <li>
            <img src={`${seaCreature["icon_uri"]}`} alt="sea creature"/>
            {seaCreature.name["name-EUen"]}
        </li>
        </>
    )
}

export default SeaCreatureComponent;