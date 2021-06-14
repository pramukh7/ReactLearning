import React from "react";
import "./Charts.css"
import {ChartBar} from "./ChartBar"

export const Chart = (props) =>
{
    let bars;
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    if(props.dataPoints.length > 0)
    {
        bars = props.dataPoints.map((dataPoint) =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        );
    }
    return (
        <div className="chart">
            {bars}
        </div>
    )
}