import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import {Helmet} from "react-helmet-async";
import { Container } from "react-base-guide";
import Title from "./title";


const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex: 1;
    width: 100%;
    max-width: ${p => p.maxWidth || "100%"};
    height: ${p => p.height || "auto"};
    max-height: 100%;
    margin: 0 auto;
`;

const Content = styled(Container)`
    overflow: auto;
    flex: 1;
    min-height: 100%;
    max-height: 100%;
    height: ${p => p.height || "auto"};
    padding-top: 24px;
    padding-bottom: 20px;
    margin: 0;
    
    
  @media(max-width: ${p => p.theme.screens.tablet}) {
    min-height: 300px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media print {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
  }
`;

const Description = styled.div`
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.2;
    color: ${p => p.theme.colors.onBackgroundVariant};
    margin-bottom: 40px;
`;

const getProps = (props) => {
    let result = {...props};
    delete result.children;
    delete result.title;
};

const Screen = (props) => {
    const { title, description, children, account } = props;

    return (
        <Wrapper {...getProps(props)} maxWidth={props.maxWidth} height={props.height}>
            <Content fullScreen height={props.height}>
                {title && <Helmet><title>{title}</title></Helmet>}
                {title && <Title marginBottom={description && "0px"}>{title}</Title>}
                {description && <Description>{description}</Description>}

                {children}
            </Content>


        </Wrapper>
    )
};

export default connect(state => ({ account: state.account }), () => ({}))(Screen);
