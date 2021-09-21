//css can be linked to the js file by importing
import "./ExpenseItem.css";
//exports can be executed in two ways: default and named.
//default can only export one component per file
//named can export multiple components
export const ExpenseItem = (props) => {
  //Insted of wrting variables here, write/import the data to App.js
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Adobe Suite";
  // const expensePrice = 55.67;

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
