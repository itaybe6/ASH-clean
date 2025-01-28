import PropTypes from "prop-types";
import "./Search.css";

const Search = ({
  className = "",
  worker,
  stastus,
  branch,
  date,
  bussiness,
}) => {
  return (
    <div className={`search ${className}`}>
      <div className="search-child" />
      <div className="div263">{worker}</div>
      <div className="div264">{stastus}</div>
      <div className="div265">{date}</div>
      <div className="div266">{branch}</div>
      <div className="div267">{bussiness}</div>
      <button className="rectangle-parent95">
        <button className="group-child192" />
        <div className="div268">צפייה בתמונה</div>
      </button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  worker: PropTypes.string,
  stastus: PropTypes.string,
  branch: PropTypes.string,
  date: PropTypes.string,
  bussiness: PropTypes.string,
};

export default Search;
