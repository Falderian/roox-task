import { cityReducer } from 'helpers/redux/appSlice';
import { ICities } from 'interfaces/cities';
import React from 'react';
import { useDispatch } from 'react-redux';

export const CitySelect = ({ cities }: { cities: ICities }) => {
  const dispatch = useDispatch();

  const handleOnBlur = (evt: React.FocusEvent<HTMLSelectElement>) => {
    dispatch(
      cityReducer({
        city: evt.currentTarget.value,
      })
    );
  };

  return (
    <select required onBlur={(evt) => handleOnBlur(evt)}>
      {cities.map((el) => (
        <option key={el.population}>{el.city}</option>
      ))}
    </select>
  );
};
