import React, { useState } from "react";
import { Input, Form } from "antd";
// import Form from "antd/lib/form/Form";
const { TextArea } = Input;

export const LongResponse: React.FC = (props: any) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <Form.Item
        name="LongResponse"
        children={<TextArea />}
      >
            </Form.Item>
        </div>
    );
}