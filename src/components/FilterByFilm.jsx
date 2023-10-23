
const FilterByFilm = ({filmFilter, handleChange}) => {
  const handleInput = (ev) =>{
    handleChange(ev.target.value);
  };

  return (
    <>
      <label htmlFor='search_film' className="filters_search">
        Search by film: 
        <input 
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

export default FilterByFilm; 
