//css can be linked to the js file by importing
import "./ExpenseItem.css";

//exports can be executed in two ways: default and named.
//default can only export one component per file
//named can export multiple components
export const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Adobe Suite";
  const expensePrice = 55.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};
