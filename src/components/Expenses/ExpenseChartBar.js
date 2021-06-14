import React from "react"
import {Chart} from "../Charts/Chart";



export const ExpenseChartBar = (props) =>
{
    const DUMMY_DATA = [
        { label:'Jan', value:0},
        { label:'Feb', value:0},
        { label:'Mar', value:0},
        { label:'Apr', value:0},
        { label:'May', value:0},
        { label:'Jun', value:0},
        { label:'Jul', value:0},
        { label:'Aug', value:0},
        { label:'Sep', value:0},
        { label:'Oct', value:0},
        { label:'Nav', value:0},
        { label:'Dec', value:0},
    ];

    for (const expense of props.chartFilterExpenses)
    {
        const expenseMonth = expense.date.getMonth();
        DUMMY_DATA[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={DUMMY_DATA}/>
}