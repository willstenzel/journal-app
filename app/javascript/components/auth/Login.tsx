import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Form  from 'antd/lib/form/Form';
import { Input, Button, Form as FormType } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const ContentContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const Login: React.FC = (props: any) => {
  return (
    <Container>
      <ContentContainer>
        <Form name='Login Form'>
          <FormType.Item
            label='Username'
            name='username'
            rules={[{ required: true }]}
            children={
              <Input prefix={<UserOutlined/>} placeholder='Username'/>
            }
          />
          <FormType.Item
            label='Password'
            name='password'
            rules={[{ required: true }]}
            children={<Input/>}
          />
          <input type='submit' value='Submit'/>
        </Form>
      </ContentContainer>
    </Container>
  );
}
