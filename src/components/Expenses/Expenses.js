import React, {useState} from "react";
import {ExpenseItems} from "./ExpenseItems";
import "./ExpenseItem.css"
import {ExpensesFilter} from "./ExpensesFilter";
import {NoDataFound} from "./NoDataFound";

export const Expenses = (props) =>
{
    const [filterYear, setFilterYear] = useState("2021");
    const message="No Data Found";
    const filterExpenseDataHandler = (filter) =>
    {
        setFilterYear(filter);
    }

    const filterExpense = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filterYear;
    })

    let expensesContent = <NoDataFound message={message} />;

    if(filterExpense.length >0)
    {
        //if length is > 0 then override expensesContext value
        expensesContent = filterExpense.map((expense) =>
                <ExpenseItems key={expense.id}
                              date={expense.date}
                              title={expense.title}
                              amount={expense.amount}
                />
            )
    }


    return(
        <div className="expenses">
            <ExpensesFilter selected = {filterYear} onFilterExpenseData={filterExpenseDataHandler}/>
            { expensesContent }
        </div>
);
}