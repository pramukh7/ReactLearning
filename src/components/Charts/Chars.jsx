import React from "react";
import "./Charts.css"
import {ChartBar} from "./ChartBar"
import data from "bootstrap/js/src/dom/data";
export const Chars = (props) =>
{
    return (
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint) => {
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={null}
                        label={dataPoint.label}
                    />
                }
                )};
        </div>
    )
}