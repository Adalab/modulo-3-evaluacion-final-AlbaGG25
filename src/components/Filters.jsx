
import FilterByFilm from './FilterByFilm' ;
import FilterByYear from './FilterByYear' ;
import PropTypes from "prop-types";
import "../styles/App.scss";

const Filters = ({filmFilter, handleChange, yearFilter, handleChangeYear, years}) => {

  const handleSubmit = (ev) =>{
    ev.preventDefault(); 
  }

  return (
   <form className="filters" onSubmit={handleSubmit}>
     <FilterByFilm 
     filmFilter={filmFilter} 
     handleChange={handleChange}
     />
     <FilterByYear 
     yearFilter={yearFilter} 
     handleChangeYear={handleChangeYear}
     years={years}
     />
   </form>
  )
}

Filters.propTypes = {
  filmFilter: PropTypes.string,
  handleChange: PropTypes.func,
  years: PropTypes.array,
  yearFilter: PropTypes.string,
  handleChangeYear: PropTypes.func,
};

export default Filters;
