import React, { useState } from 'react';
import './Expenses.css';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';

//Containes the individual expense items and the container div
export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = filterValue => {
    setFilteredYear(filterValue);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
