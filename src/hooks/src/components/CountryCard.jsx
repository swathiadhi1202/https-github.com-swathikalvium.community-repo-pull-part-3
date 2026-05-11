import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className="country-card"
      onClick={() => navigate(`/country/${country.cca3}`)}
    >
      <img src={country.flags.svg} alt={country.name.common} width="100" />
      <h4>{country.name.common}</h4>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}

