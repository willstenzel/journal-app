import React, { useState } from "react";
import { BlockTemplate, NumberRange }  from "../../models/types"
import { Slider, Form } from "antd";

export const Quantitative: React.FC = (props: BlockTemplate) => {
    const range: NumberRange = props.range ? props.range : {min: 1, max: 10};
    const defaultValue = (range.min + range.max)/2;
    return (
        <div>
            <h1>{props.title}</h1>
            <Form.Item
                name={props.id}
                children={
                    <Slider 
                        defaultValue={defaultValue} 
                        min={range.min} 
                        max={range.max}/>}
            />
        </div>
    );
}