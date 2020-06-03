import React, { useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

export const LongResponse: React.FC = (props: any) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <TextArea />
        </div>
    );
}