import { IInput } from 'interfaces/input';
import React from 'react';

export const Input = ({ name, hint }: IInput) => {
  return (
    <div className="input__div">
      <label className="input__label" htmlFor="input">
        {name}
      </label>
      <input className="input" type="text"></input>
      <span className="input__hint">{hint}</span>
    </div>
  );
};
