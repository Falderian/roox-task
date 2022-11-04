import { checkboxReducer } from 'helpers/redux/appSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AgreementSection = () => {
  const dispatch = useDispatch();

  const handleOnBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    dispatch(
      checkboxReducer({
        checkbox: evt.currentTarget.checked,
      })
    );
  };
  return (
    <section className="agreement">
      <div className="agreement__div">
        <label htmlFor="input">Я согласен</label>
        <input type="checkbox" onBlur={(evt) => handleOnBlur(evt)}></input>
        <span className="agreement__hint">принимать актуальную информацию на емейл</span>
      </div>
    </section>
  );
};
