import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

export default () => (
    <>
        <h1>Journal App</h1>
        <Button type="primary"><Link to="/entries/new?type=daily">Create a new daily reflection entry</Link></Button>
        <br/>
        <br/>
        <Button type="primary"><Link to="/entries/new?type=freeform">Create a new free form entry</Link></Button>
    </>
);
