import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { getTemplateList } from '../mocks/templatesList'
import styled from 'styled-components'

import { TemplateInfo } from "../models/types";

const Container = styled.div`
    width: 100%;
    margin: 0px;
    padding: 0px;
`;

const ContentContainer = styled.div`
    margin: 10px;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin: auto;
    font-size: 3em;
`;

const StyledButton = styled(Button)`
    width: 100%;
    margin: 0px 0px 15px 0px;
`;

const Line = styled.hr`
    color: rgba(0, 0, 0, 0.5);
`;

export default () => {
    const templatesList = getTemplateList();
    return (
        <Container>
            <Title>Home</Title>
            <a href="admins/sign_out">Sign Out</a>
            <Line/>
            <ContentContainer>
                {templatesList.map((template) => (
                    <>
                        <StyledButton shape="round" size="large" key={template.id} type="primary"><Link to={`/entries/new?type=${template.key}`}>{template.name}</Link></StyledButton>
                        <br />
                    </>
                ))}
            </ContentContainer>
        </Container>
    )
};
