import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAmaunt, setInputAmaunt] = useState('');
  const [inputDate, setInputDate] = useState('');

//  const [userInput,setUserInput] = useState({
//     name: "",
//     amaunt: "",
//     date: "",
//   });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name:event.target.value
    // })
  };

  const amauntChangeHandler = (event) => {
    setInputAmaunt(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amaunt:event.target.value})
      // setUserInput( (previousState)=> {
      //  return {...previousState,
      //   amaunt:event.target.value}})
      
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date:event.target.value})
  };

  const submitHandler=(event)=>{
    event.preventDefault();

    const costData ={
      description:inputName,
      amount:inputAmaunt,
      date: new Date (inputDate)
    }

    props.onSaveCostData(costData);
    setInputName('');
    setInputAmaunt('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            type="number" value={inputAmaunt}
            min="0.01"
            step="0.01"
            onChange={amauntChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date" value={inputDate}
            min="2020-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити витрату</button>
          <button type='button' onClick={props.onCancel} >відміна</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
