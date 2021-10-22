import './ExpenseForm.css';
import { useState } from 'react';

//Form component that holds input for Name, Amount, and Date
export const ExpenseForm = props => {
  //use State to store values for input
  //create functions to watch the values of the input fields
  //Add onChange prop to input fields to update value when any change is made

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //Alternate Method of using sigle state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = event => {
    event.preventDefault();
    //object that will hold all of the current state values
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //two way binding that allows form fields to clear upon submission
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          {/* Sets isEditing state to false and hides form */}
          <button type="button" onClick={props.endEditingMode}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
