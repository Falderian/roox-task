import axios from 'axios';
import store from 'helpers/redux/store';
import { ICities } from 'interfaces/cities';
import { IState } from 'interfaces/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AgreementSection } from './agreementSection/agreementSection';
import { CitySelect } from './citySelect/citySelect';
import { EmailSection } from './emailSection/emailSetction';
import { PasswordSection } from './passwordSection/passwordSection';
import { SubmitSection } from './submitSection/submitSection';

export const Form = () => {
  const [cities, setCities] = useState<ICities>([]);

  useEffect(() => {
    const cities = getCities();
    cities.then((data) => {
      const sortedCities = sortCities(data);
      setCities(sortedCities);
    });
  }, []);

  const getCities = async () => {
    const response = await axios.get('https://json.extendsclass.com/bin/83c9ce2d0a7b');
    return response.data;
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const result = Object.assign(store.getState().appData);
    console.log(result);
  };

  const sortCities = (cities: ICities) => {
    cities = cities.filter((el) => Number(el.population) > 50000);
    const swapedCities = swapTwoCities(cities);
    const sotredCities = swapedCities.sort();
    return sotredCities;
  };

  const swapTwoCities = (cities: ICities) => {
    let max = cities[0];
    for (let i = 0; i < cities.length; i++) {
      if (cities[i] >= max) max = cities[i];
    }
    const temp = cities[0];
    cities[cities.indexOf(max)] = temp;
    cities[0] = max;
    return cities;
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
