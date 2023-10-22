
const FilterByYear = ({yearFilter, handleChangeYear, years}) => {
  const handleSelectYear = (ev) =>{
    handleChangeYear(ev.target.value);
  };
  
  const renderYearOptions = () => {
     return years.map ((year, id) => {
       return <option key={id} value={year}>{year}</option>
  });
  };

  return (
    <>
      <label htmlFor="search_year">
        Search by year: 
        </label>
        <select
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
    </>
  );
};

export default FilterByYear;
