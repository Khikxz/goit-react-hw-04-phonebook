import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({filter, setFilterFunc}) => {
  const handleFilterChange = e => {
    setFilterFunc(e.target.value);
  };

  return (
    <div className={css.divFilter}>
      <p>Find Contacts by Name</p>
      <input
        type = "text"
        name = "filter"
        placeholder = "Search by name"
        value = {filter}
        onChange = {handleFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilterFunc: PropTypes.func.isRequired,
};