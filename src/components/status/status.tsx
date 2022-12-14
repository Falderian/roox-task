import { statusReducer } from 'helpers/redux/appSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Status = () => {
  const dispatch = useDispatch();

  const [activeTextfield, setActiveTextfield] = useState(true);

  const handleOnBlur = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
    dispatch(
      statusReducer({
        status: evt.currentTarget.value,
      })
    );
  };

  return (
    <section className="status">
      <div className="status__head">
        <h1 className="status__greetings">Здравствуйте, Человек №3596941</h1>
        <button className="status__change-btn" onClick={() => setActiveTextfield(!activeTextfield)}>
          Сменить статус
        </button>
      </div>
      <textarea
        disabled={activeTextfield}
        className="status__textfield"
        onBlur={(evt) => handleOnBlur(evt)}
      ></textarea>
    </section>
  );
};
