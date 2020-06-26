import React, { useState } from "react";
import { BlockTemplate }  from "../../models/types"
import { Input, Form } from "antd";

export const Header: React.FC = (props: BlockTemplate) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Form.Item
                name={props.id}
                children={<Input size="large" placeholder={props.hint}/>}
            />           
        </div>
    );
}