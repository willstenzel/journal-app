import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

export default () => (
    <>
        <h1>Journal App</h1>
        <Button type="primary"><Link to="/entries/new">Create a new entry</Link></Button>
    </>
);
