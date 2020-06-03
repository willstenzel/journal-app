import React, { useState } from "react";
import { Input } from 'antd';

export const Header: React.FC = (props: any) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Input size="large" placeholder={props.hint} />
        </div>
    );
}