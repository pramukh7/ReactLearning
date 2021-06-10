import React from "react";
import "./ExpenseDate.css"

export const NoDataFound = (props) =>
{
    return(
        <div className="noDataFound">
            {props.message}
        </div>
    );
}