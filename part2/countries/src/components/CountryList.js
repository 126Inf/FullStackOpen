const CountryList = (props) => {
  if (props.countries.length > 1 && props.countries.length <= 10) {
    return (
      <ul>
        {props.countries.map((country) => {
          return (
            <li key={country.name.common}>
              {country.name.common}
              <button
                onClick={() => {
                  props.buttonAction(country.name.common);
                }}
              >
                Show
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default CountryList;
