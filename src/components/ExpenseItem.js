//css can be linked to the js file by importing
import "./ExpenseItem.css";

//exports can be executed in two ways: default and named.
//default can only export one component per file
//named can export multiple components
export const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 3, 2021</div>
      <div className="expense-item__description">
        <h2>Adobe Suite</h2>
        <div className="expense-item__price">$55.67</div>
      </div>
    </div>
  );
};
