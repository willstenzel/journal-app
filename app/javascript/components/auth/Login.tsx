import React, { useState } from 'react';
import Form from 'antd/lib/form/Form';
// import Button from 'antd/lib/button/Button';
import { Input, Button } from 'antd';
import styled from 'styled-components';


export const Login: React.FC = (props: any) => {
  return (
      <Form name='Login Form'>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true }]}
        >
          <Input/>
        </Form.Item>
        <input type='submit' value='Submit'/>
      </Form>
  );
}
