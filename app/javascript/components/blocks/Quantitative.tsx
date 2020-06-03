import React, { useState } from "react";

export const Quantitative: React.FC = (props: any) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.range.min}</p>
            <p>{props.range.max}</p>
        </div>
    );
}