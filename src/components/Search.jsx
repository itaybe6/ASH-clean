import PropTypes from "prop-types";
import "./Search.css";

const Search = ({
  className = "",
  worker,
  status,
  branch,
  date,
  bussiness,
}) => {
  return (
    <div className="search">
      <div className="date">{date}</div>
      <div className="business">{bussiness}</div>
      <div className="branch">{branch}</div>
      <div className="worker">{worker}</div>
      <div className="status">{status ? "נעשה" : "לא נעשה"}</div>
      <button className="img-btn">צפייה בתמונה</button>
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
