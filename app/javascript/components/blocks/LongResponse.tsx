import React, { useState } from "react";
import { BlockTemplate }  from "../../models/types"
import { Input, Form } from "antd";
// import Form from "antd/lib/form/Form";
const { TextArea } = Input;

export const LongResponse: React.FC = (props: BlockTemplate) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <Form.Item
                name={props.id}
                children={<TextArea/>}
            />     
        </div>
    );
}