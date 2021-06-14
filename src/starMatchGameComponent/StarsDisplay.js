import React from "react";
import {utils} from "./Utils"
import "./StarMatchGame.css"

export const StarsDisplay = props => (
    <>
        {utils.range(1, props.count).map(starId => (
            <div key={starId} className="star" />
        ))}
    </>
);
