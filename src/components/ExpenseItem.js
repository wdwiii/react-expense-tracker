//css can be linked to the js file by importing
//exports can be executed in two ways: default and named.
//default can only export one component per file
//named can export multiple components
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./Card.css";

export const ExpenseItem = (props) => {
  //Insted of wrting variables here, write/import the data to App.js
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Adobe Suite";
  // const expensePrice = 55.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
