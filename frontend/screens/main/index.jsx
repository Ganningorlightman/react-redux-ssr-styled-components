import React from "react";
import Screen from "../../components/screen";
import styled from "styled-components";

const Test = styled.div`
  height: 2000px;
`;

const Main = ({ match }) => (
    <Screen title="Главная" match={match}>
        <Test />
    </Screen>
);

export default Main;
