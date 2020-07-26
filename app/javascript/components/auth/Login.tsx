import React, { useState } from 'react';
import { UserOutlined, EyeOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';
import Form  from 'antd/lib/form/Form';
import { Input, Button, Form as FormType } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 100vh;
`;

const ContentContainer = styled.div`
    position: absolute;
    width: 50%;
    margin: auto;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Login: React.FC = (props: any) => {
    return (
        <Container>
            <ContentContainer>
                <h1>Login</h1>
                <Form name='Login Form'>
                <FormType.Item
                    name='username'
                    rules={[{ required: true }]}
                    children={
                        <Input prefix={<UserOutlined/>} placeholder='Username'/>
                    }
                />
                <FormType.Item
                    name='password'
                    rules={[{ required: true }]}
                    children={
                        <Input.Password prefix={<LockOutlined/>} placeholder='Password' iconRender={(visible) => visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}/>
                    }
                />
                <input type='submit' value='Submit'/>
                </Form>
            </ContentContainer>
        </Container>
    );
}
