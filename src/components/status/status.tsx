import React from 'react';

export const Status = () => {
  return (
    <section className="status">
      <div className="status__head">
        <h1 className="status__greetings">Здравствуйте, Человек №3596941</h1>
        <button className="status__change-btn">Сменить статус</button>
      </div>
      <textarea className="status__textfield"></textarea>
    </section>
  );
};
