import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FilterText } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  // console.log(filter);

  const changeFilterValue = event => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <label>
      <FilterText>Find contacts by name</FilterText>
      <input
        type="text"
        value={filter}
        onChange={changeFilterValue}
      />
    </label>
  );
}

