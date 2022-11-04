import React from 'react';

export const AgreementSection = () => {
  return (
    <section className="agreement">
      <div className="agreement__div">
        <label htmlFor="input">Я согласен</label>
        <input type="checkbox"></input>
        <span className="agreement__hint">принимать актуальную информацию на емейл</span>
      </div>
    </section>
  );
};
