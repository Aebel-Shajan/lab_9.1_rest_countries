import './Country.css';

const Country = ({ country, hasVisited, switchStates}) => {
    return (
        <div className="country">
            <img src={country.flags.png} alt={`flag of ${country.name.common}`}/>
            <h4>Name: {country.name.common}</h4>
            <p>Capital City: {country.capital}</p>
            <p>Population: {country.population}</p>
            <button onClick={(evt)=> {
                switchStates(hasVisited, country)
            }}>
                Switch
            </button>
        </div>
    );
}

export default Country;