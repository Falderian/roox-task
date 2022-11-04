import React from 'react';
import { Input } from '../inputs/input';

export const PasswordSection = () => {
  return (
    <section className="password">
      <Input name="Пароль" hint="Ваш новый пароль должен содержать не менее 5 символов." />
      <Input
        name="Пароль еще раз"
        hint="Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки."
      />
    </section>
  );
};
