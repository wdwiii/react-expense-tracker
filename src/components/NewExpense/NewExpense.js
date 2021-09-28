import React from 'react';

import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

//Wrapper div that surrounds the form
export const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
