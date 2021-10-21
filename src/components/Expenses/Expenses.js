import React, { useState } from 'react';
import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

//Containes the individual expense items and the container div
export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = filterValue => {
    setFilteredYear(filterValue);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //default value if filtered expenses length is equal to zero
  let expensesContent = <p>No expenses found</p>;

  //if filtered expenses length is greater than zero, overwrite expensesContent with the rendered expense items.
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};
