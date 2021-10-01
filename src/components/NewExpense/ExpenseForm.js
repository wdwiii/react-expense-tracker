import './ExpenseForm.css';
import { useState } from 'react';

//Form component that holds input for Name, Amount, and Date
export const ExpenseForm = () => {
  //use State to store values for input
  //create functions to watch the values of the input fields
  //Add onChange prop to input fields to update value when any change is made

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => setEnteredTitle(event.target.value);
  const amountChangeHandler = event => setEnteredAmount(event.target.value);
  const dateChangeHandler = event => setEnteredDate(event.target.value);

  const submitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-13-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
