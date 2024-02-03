import { useState } from "react";
import css from './search-form.module.css'

const SearchForm = ({onSubmit}) => {
 const [search, setSearch] = useState('');

 const handleChange = ({ target }) => {
    setSearch(target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch('')
  }

    return (
  <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input onChange={handleChange}
          value={search}
          name="search"
          className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
        />
        <button type="submit" className={css.SearchFormButton}>
    </button>
  </form>
)

}

export default SearchForm;