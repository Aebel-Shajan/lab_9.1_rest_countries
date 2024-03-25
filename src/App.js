import './App.css';
import { useEffect, useState } from 'react';
import CountryContainer from './containers/CountryContainer';

function App() {
  const [allCountries, setAllCountries] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [unvisitedCountries, setUnvisitedCountries] = useState([]);

  const loadAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/subregion/Europe");
    const jsonData = await response.json();
    setAllCountries(jsonData);
    setUnvisitedCountries(jsonData);
  }

  useEffect(() => {
    loadAllCountries();
  }, []);

  const switchStates = (hasVisited, country) => {
    if (hasVisited) {
      const indexToRemove = visitedCountries.indexOf(country);
      visitedCountries.splice(indexToRemove, 1)
      setVisitedCountries([...visitedCountries]);

      setUnvisitedCountries([...unvisitedCountries, country]);

    } else {
      const indexToRemove = unvisitedCountries.indexOf(country);
      unvisitedCountries.splice(indexToRemove, 1)
      setUnvisitedCountries([...unvisitedCountries]);

      setVisitedCountries([...visitedCountries, country]);
    }
  }

  return (
    <div className="App">
        <CountryContainer title={"Countries"} hasVisited={false} countries={unvisitedCountries} switchStates={switchStates}/>
        <CountryContainer title={"Visited Countries"} hasVisited={true} countries={visitedCountries} switchStates={switchStates}/>
    </div>
  );
}

export default App;
