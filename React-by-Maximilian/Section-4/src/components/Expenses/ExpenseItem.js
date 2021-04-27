import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js"

function ExpenseItem(props) {

  const clickHandler = () => console.log("Clicked")

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
