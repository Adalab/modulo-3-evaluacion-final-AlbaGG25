import "../styles/App.scss";
import PropTypes from "prop-types";

const FilterByYear = ({yearFilter, handleChangeYear, years}) => {
  const handleSelectYear = (ev) =>{
    handleChangeYear(ev.target.value);
  };
  
  const renderYearOptions = () => {
     return years
     .sort((a,b)=>a-b)
     .map ((year, id) => {
       return <option key={id} value={year}>{year}</option>
      })
  };

  return (
    <>
      <label htmlFor="search_year" className="filters_select">
        Search by year: 
        <select
          className="filters_select-input"
          name="search_year"
          id="search_year"
          value={yearFilter}
          onChange={handleSelectYear}
        >
          <option value={''}>
            Choose a year
          </option>
          {renderYearOptions()}
        </select>
      </label>
    </>
  );
};

FilterByYear.propTypes = {
  years: PropTypes.array,
  yearFilter: PropTypes.string,
  handleChangeYear: PropTypes.func,
};
export default FilterByYear;
