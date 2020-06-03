import React, { useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

export const ShortResponse: React.FC = (props: any) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <TextArea />
        </div>
    );
}