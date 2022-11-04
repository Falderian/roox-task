import React, { useState } from 'react';

export const SubmitSection = () => {
  const [date, setDate] = useState('');

  const getDateChange = () => {
    const currentDate = new Date();
    const DD_MM__YY = currentDate
      .toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      .slice(0, -3);
    const time = currentDate.toLocaleTimeString();
    const date = `${DD_MM__YY} в ${time}`;
    setDate(date);
  };

  return (
    <section className="submit">
      <button className="submit__btn" type="submit" form="form" onClick={getDateChange}>
        Изменить
      </button>
      <span className="submit__last-change">последние изменения {date}</span>
    </section>
  );
};
