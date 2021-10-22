import './ExpensesList.css';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = props => {
  //if filtered expenses length is zero, render h2 element.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  //else, render expenses list items
  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};
