import {useState} from "react";
import "./NewExpenseForm.css"
import {AddNewExpense} from "./AddNewExpense";

export const NewExpenseForm = (props) =>
{
    //separate state for each field
    const [enteredDate, setSelectedDateHandler] = useState('');
    const [enteredTitle, setEnteredTitleHandler] = useState('');
    const [enteredAmount, setEnteredAmountHandler] = useState('');
    const [showAddExpense, setShowAddExpense] = useState(false);

    const dateChangeHandler = (event) =>
    {
        setSelectedDateHandler(event.target.value)
    }

    const titleChangeHandler = (event) =>
    {
        setEnteredTitleHandler(event.target.value)
    }

    const amountChangeHandler = (event) =>
    {
        setEnteredAmountHandler(event.target.value)
    }

    //if you want to use single state approach
    /*const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredDate:'',
        enteredAmount:''
    })

    const titleChangeHandler = (event) =>
    {
        setUserInput ((prevState) =>
        {
            return {...prevState, enteredTitle : event.target.value};

        });
    };

    const dateChangeHandler = (event) =>
    {
        setUserInput((prevState) =>
        {
        return {...prevState, enteredDate:event.target.value}
        });
    }

    const amountChangeHandler = (event) =>
    {
        setUserInput((prevState) =>
        {
            return {...prevState, enteredAmount : event.target.value};
        });
    }
    */

    const submitHandler = (event) =>
    {
        event.preventDefault();
        const expenseData = {
                date : new Date(enteredDate),
                title : enteredTitle,
                amount : enteredAmount,
        };
        //this function passing this class data (child class data) to parent
        props.onSaveExpenseData(expenseData);

        //setting empty string after save
        setSelectedDateHandler('');
        setEnteredTitleHandler('');
        setEnteredAmountHandler('');
        setShowAddExpense(false);
    };

    const showAddNewExpenseForm = () =>
    {
        setShowAddExpense(true);
    };

    const cancelHandler = () =>
    {
        window.location.href = "/expense-tracker";
    }

    let expenseDataContent = <AddNewExpense onclickHandler={showAddNewExpenseForm} />

    if(showAddExpense)
    {
        expenseDataContent = <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date :</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} required/>
                    </div>
                    <div className="new-expense__control">
                        <label>Expense Title :</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount :</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={cancelHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    }

    return (
        <div>
            {expenseDataContent}
        </div>
    );
}