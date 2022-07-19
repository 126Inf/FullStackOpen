const ErrorMessage = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
};

export default ErrorMessage;
