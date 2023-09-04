import { useState } from 'react';

export const Searchbar = ({ onChangeSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = e => {
    setInputValue(e.target.value);
  };

  const handelFormBtn = e => {
    e.preventDefault();
    onChangeSearch(inputValue);
    setInputValue('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handelFormBtn} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={inputValue}
          onChange={handleSearchChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
