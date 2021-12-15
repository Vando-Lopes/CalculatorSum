import React, { useState } from 'react';
import NumberForm from './components/NumberForm';
import Result from './components/Result';
import ButtonSum from './components/ButtonSum';
import './App.css';

function App() {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState()

  function calculatorSum() {
    //se o campo não tiver nada, usar 0 como padrão
    setResult((number1 === undefined ? 0 : number1) + (number2 === undefined ? 0 : number2));
  }

  return (
    <div className="App">
      <h1>{process.env.REACT_APP_SITE_TITLE}</h1>
      <NumberForm number1={number1} number2={number2} setNumber1={setNumber1} setNumber2={setNumber2}></NumberForm>
      <ButtonSum onClick={calculatorSum}></ButtonSum>
      <Result result={isNaN(result) ? 0 : result}></Result>
    </div >
  );
}

export default App;
