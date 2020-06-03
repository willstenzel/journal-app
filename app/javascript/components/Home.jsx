import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { getTemplateList } from '../mocks/templatesList'
import { TemplateInfo } from "../models/types";

export default () => {
    const templatesList = getTemplateList();
    return (
        <>
            <h1>Journal App</h1>
            {templatesList.map((template) => (
                <>
                    <Button key={template.id} type="primary"><Link to={`/entries/new?type=${template.key}`}>Create a new {template.name} entry</Link></Button>
                    <br />
                    <br />
                </>
            ))}
        </>
    )
};
