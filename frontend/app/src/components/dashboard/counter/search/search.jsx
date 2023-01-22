import './search.css'
import SearchBar from './searchbar/searchbar'

const Search = () => {
    return(<div className='col-12 col-lg-6 row'>
    <div
    className='bg-light my-3  d-none d-lg-block ms-2 shadow-sm rounded-4'
    >
        <SearchBar />
    </div>
    </div>)

}

export default Search