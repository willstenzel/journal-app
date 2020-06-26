import React, { useState } from "react";
import { BlockTemplate }  from "../../models/types"
import { Input, Form } from "antd";

export const ShortResponse: React.FC = (props: BlockTemplate) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <Form.Item
                name={props.id}
                children={<Input/>}
            />
        </div>
    );
}

