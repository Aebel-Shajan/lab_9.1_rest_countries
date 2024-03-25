import Country from "../components/Country";

const CountryContainer = ({ hasVisited, countries, switchStates}) => {    
    let countryElements= null;
    if (countries !== null) {
        countryElements = countries.map((country, index) => {
            
            return <li key={index}><Country country={country} switchStates={switchStates} hasVisited={hasVisited} /></li>
        })
    }

    return ( 
    <div>
        <h2>{hasVisited ? "Visited Countries" : "Countries"}</h2>
        <ul>
            {countryElements}
        </ul>
    </div> 
    );
}
 
export default CountryContainer;