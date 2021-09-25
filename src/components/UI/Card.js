import React from 'react';
import './Card.css';

//Card will serve as a wrapper div with extrated styles form Expenses and ExpenseItem. Prevent code duplication

export const Card = props => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};
