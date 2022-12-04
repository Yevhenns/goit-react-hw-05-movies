import { useState } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Empty request');
      return;
    }
    // onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <input value={query} onChange={handleQueryChange}></input>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </>
  );
};
