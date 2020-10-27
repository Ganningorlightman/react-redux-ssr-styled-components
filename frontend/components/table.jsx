import React from "react";
import styled from "styled-components";

const OverflowWrapper = styled.div`
  box-sizing: border-box;
  overflow: auto;
  max-width: 100%;
  margin-bottom: ${p => p.marginBottom || 0};
`;

const Wrapper = styled.table`
  box-sizing: border-box;
  overflow: auto;
  width: 100%;
  max-width: ${p => p.maxWidth || "100%"};
  min-width: ${p => p.minWidth || 0};
  border-collapse: collapse;
`;

const HeadWrapper = styled.thead`
  box-sizing: border-box;
  box-shadow: ${p => p.theme.shadows.xs};
`;

const Td = styled.td`
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${p => p.whiteSpace || "nowrap"};
  height: 28px;
  line-height: 28px;
  font-size: 16px;
  padding: ${p => p.rowPadding || "8px"};
  color: ${p => p.theme.colors.onSurface};
  
  @media(max-width: ${p => p.theme.screens.tablet}) {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
`;

const Row = styled.tr`
  box-sizing: border-box;
`;

const Head = (props) => (
    <HeadWrapper minWidth={props.minWidth}>
        <Row>
            {props.head && Object.keys(props.head).map((col, key) => (
                <Td whiteSpace={props.whiteSpace} key={key} onClick={() => props.sort && props.sort(col)}>{props.head[col]}</Td>
            ))}
        </Row>
    </HeadWrapper>
);

const Body = (props) => (
    <tbody>
        {props.body && props.body.map((row, keyRow) => (
            <Row key={keyRow} minWidth={props.minWidth} >
                {Object.keys(props.head).map((col, keyCol) => (
                    <Td whiteSpace={props.whiteSpace} rowPadding={props.rowPadding} key={keyCol}>{row[col]}</Td>
                ))}
            </Row>
        ))}
    </tbody>
);

const Table = (props) => (
    <OverflowWrapper marginBottom={props.marginBottom}>
        <Wrapper {...props} head={null} body={null} sort={null} >
            <Head whiteSpace={props.whiteSpace} head={props.head} sort={props.sort}  />
            <Body whiteSpace={props.whiteSpace} rowPadding={props.rowPadding} head={props.head} body={props.body} />
        </Wrapper>
    </OverflowWrapper>
);

export default Table;
