import React from 'react';
import './App.scss';
import { Form } from './form/form';
import { Status } from './status/status';

function App() {
  return (
    <div className="wrapper">
      <Status />
      <Form />
    </div>
  );
}

export default App;
