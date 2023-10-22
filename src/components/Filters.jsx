
import FilterByFilm from './FilterByFilm' ;
import FilterByYear from './FilterByYear' ;
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

export default Filters;
