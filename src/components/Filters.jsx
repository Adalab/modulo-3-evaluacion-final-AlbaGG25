
import FilterByFilm from './FilterByFilm' ;
import FilterByYear from './FilterByYear' ;


const Filters = ({filmFilter, handleChange}) => {
  return (
   <form className="filters" >
     <FilterByFilm filmFilter={filmFilter} handleChange={handleChange}/>
     <FilterByYear />
   </form>
  )
}

export default Filters
