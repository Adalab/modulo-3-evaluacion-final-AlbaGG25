
import FilterByFilm from './FilterByFilm' ;
import FilterByYear from './FilterByYear' ;


const Filters = ({filmFilter, handleChange, yearFilter, handleChangeYear, years}) => {
  return (
   <form className="filters" >
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

export default Filters;
