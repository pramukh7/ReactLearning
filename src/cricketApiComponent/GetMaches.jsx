import React from "react";
import "../App.css"

export const GetMatches = (props) => {

    let matchesData = "";
    if(props.matches["type"] == "Twenty20")
    {
        matchesData =

                <div>
                    <div>Date   : {props.matches["date"]}</div>
                    <div>Team 1 : {props.matches["team-1"]}</div>
                    <div>Team 2 : {props.matches["team-2"]}</div>
                    <div>Type   :{props.matches["type"]}</div>
                </div>
    }

    return (
        <div className="row card bg-success text-white">
            {matchesData}
        </div>
    )
}
