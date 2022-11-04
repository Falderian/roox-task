import { emailReducer, passwordReducer, passwordRepeatReducer } from 'helpers/redux/appSlice';
import { IInput } from 'interfaces/input';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Input = ({ name, hint }: IInput) => {
  const dispatch = useDispatch();

  const handleOnBlur = (evt: React.FocusEvent<HTMLInputElement>, name: string) => {
    switch (name) {
      case 'Пароль еще раз':
        dispatch(
          passwordRepeatReducer({
            passwordRepeat: evt.currentTarget.value,
          })
        );
        break;
      case 'Электронная почта':
        dispatch(
          emailReducer({
            email: evt.currentTarget.value,
          })
        );
        break;
      default:
        dispatch(
          passwordReducer({
            password: evt.currentTarget.value,
          })
        );
    }
  };

  return (
    <div className="input__div">
      <label className="input__label" htmlFor="input">
        {name}
      </label>
      <input
        className="input"
        type="text"
        onBlur={(evt) => handleOnBlur(evt, name)}
        required
      ></input>
      <span className="input__hint">{hint}</span>
    </div>
  );
};
