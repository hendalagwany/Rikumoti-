function SearchBar({ value, onChange, placeholder }) {
    return (
        <input
            className="search-input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchBar;