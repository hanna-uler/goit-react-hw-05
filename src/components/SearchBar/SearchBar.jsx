
import css from './SearchBar.module.css'
import toast from 'react-hot-toast'

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const { searchInput } = form.elements;
        const searchQuery = searchInput.value.trim("");
        if (searchQuery === "") {
            toast("Please enter the search query.");
        }
        onSubmit(searchQuery);
        form.reset()
    }
    return (
        <header className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="searchInput"
                    autoComplete="off"
                    autoFocus
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </header>
    )
    
}
