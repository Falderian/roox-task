import axios from 'axios';
import { ICities } from 'interfaces/cities';
import { IState } from 'interfaces/store';
import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AgreementSection } from './agreementSection/agreementSection';
import { CitySelect } from './citySelect/citySelect';
import { EmailSection } from './emailSection/emailSetction';
import { PasswordSection } from './passwordSection/passwordSection';
import { SubmitSection } from './submitSection/submitSection';

export const Form = () => {
  const [cities, setCities] = useState<ICities>([]);
  const state = useSelector<IState>((state) => state);

  const getCities = async () => {
    const response = await axios.get('https://json.extendsclass.com/bin/83c9ce2d0a7b');
    return response.data;
  };

  useEffect(() => {
    const cities = getCities();
    cities.then((data) => setCities(data));
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(state);
  };

  return (
    <form id="form" className="form" onSubmit={(evt) => handleSubmit(evt)}>
      <CitySelect cities={cities} />
      <PasswordSection />
      <EmailSection />
      <AgreementSection />
      <SubmitSection />
    </form>
  );
};
