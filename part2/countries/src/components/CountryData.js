import WeatherData from "./WeatherData";

const CountryData = (props) => {
  if (props.countries.length === 1) {
    const country = props.countries[0];
    const languages = Object.values(country.languages);
    const flag = country.flags.png;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h2>Languages: </h2>
        <ul>
          {languages.map((lang) => {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
        <img src={flag} alt="Countries Flag" height="100px" />
        <WeatherData capital={country.capital[0]} />
      </div>
    );
  }
};

export default CountryData;
