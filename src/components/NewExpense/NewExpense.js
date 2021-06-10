import React from "react";
import {NewExpenseForm} from "./NewExpenseForm";
import "./NewExpense.css"

export const NewExpense = (props) =>
{
    //to Pass value from child to parent
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
          ...enteredExpenseData,
            id: Math.random().toString()
        };
        //Passing data from this Child Class (NewExpense) to Parent Class (App)
        props.onAddExpenseData(expenseData);
    }
    return (
        <div className="new-expense">
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}