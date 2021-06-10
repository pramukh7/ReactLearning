import React from "react";
import "./NewExpenseForm.css"
export const AddNewExpense = (props) =>
{
    return(
        <div className="new-expense__actions">
            <button onClick={props.onclickHandler}>Add New Expense</button>
        </div>
    )
}