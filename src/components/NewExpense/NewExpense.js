import React, { useState } from 'react';

import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

//Wrapper div that surrounds the form
export const NewExpense = props => {
  const onSaveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const endEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* If isEditing is FALSE, show button */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* If isEditing is TRUE, show form */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          endEditingMode={endEditingHandler}
        />
      )}
    </div>
  );
};
