import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";

export default function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { country, loading, error } = useCountry(code);

  if (loading) return <p>Loading country data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>No country found.</p>;

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country;

  return (
    <div className="country-detail">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <img src={flags?.svg} alt={name?.common} width="200" />
      <h2>{name?.common}</h2>
      <h3>Official: {name?.official}</h3>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Subregion:</strong> {subregion}</p>
      <p><strong>Capital:</strong> {capital?.join(", ")}</p>
      <p><strong>Languages:</strong> {languages && Object.values(languages).join(", ")}</p>
      <p><strong>Currencies:</strong> {currencies && Object.values(currencies).map(c => c.name).join(", ")}</p>
      <p><strong>Borders:</strong> {borders?.join(", ") || "None"}</p>
    </div>
  );
}
