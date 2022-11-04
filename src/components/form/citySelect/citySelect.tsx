import { ICities } from 'interfaces/cities';
import React from 'react';

export const CitySelect = ({ cities }: { cities: ICities }) => {
  return (
    <select>
      {cities.map((el) => (
        <option key={el.population}>{el.city}</option>
      ))}
    </select>
  );
};
