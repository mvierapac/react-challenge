import "./SearchResults.css";

export const SearchResults = ({ results }) => {
  return <p className="search-results">{`${results} results`}</p>;
};
