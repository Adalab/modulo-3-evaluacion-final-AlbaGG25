import PropTypes from "prop-types";

const FilterByFilm = ({filmFilter, handleChange}) => {
  const handleInput = (ev) =>{
    handleChange(ev.target.value);
  };

  return (
    <>
      <label htmlFor='search_film' className="filters_search">
        Search by film:  
        <input 
        className="filters_search-input"
        placeholder="Film name..."
        type='text'
        name='search_film'
        id='search_film'
        value={filmFilter}
        onChange={handleInput}
        />
      </label>
    </>
  )
}

FilterByFilm.propTypes = {
  filmFilter: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FilterByFilm; 
