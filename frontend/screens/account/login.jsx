import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../../components/screen";
import Title from "../../components/title";
import { Input, Button } from "react-base-guide";


const validateEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
};

const login = async (state, setProgress) => {
    setProgress(true);
    try {
        const data = await axios.post(routing.posts.account.login, state);
        if (data) {
            let backUrl = location.search.replace("?back=", "");
            location.href = backUrl || routing.pages.account.profile;
        } else {
            alert("Неверный логин или пароль", "error");
        }
    } catch (e) {
        alert("Ошибка при логине", "error", e);
    }
    setProgress(false);
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 40px 60px;
  border-radius: ${p => p.theme.radius.default};  
  box-shadow: ${p => p.theme.shadows.l};
  background: ${p => p.theme.colors.surface};
  
  @media(max-width: ${p => p.theme.screens.mobile}) {
    padding: 20px 30px;
  }
`;

const Login = ({ match }) => {
    const [ state, setAllState ] = useState({});
    const [ progress, setProgress ] = useState(false);
    const setState = obj => setAllState({ ...state, ...obj });

    const loginByEnter = (e) => {
        if ((e.key === "Enter") && (validateEmail(state.email) && state.pass && state.pass.length > 0)) {
            login(state, setProgress);
        }
    }

    return (
        <Screen match={match} maxWidth="600px" height="100%">
            <Wrapper>
                <Form>
                    <Title>Вход</Title>
                    <Input
                        label="Email"
                        placeholder="mail@address.zone"
                        maxLength="250"
                        block
                        autoFocus
                        marginBottom="24px"
                        type="email"
                        value={state.email || ""}
                        onChange={e => setState({ email: e.target.value })}
                    />
                    <Input
                        label="Пароль"
                        placeholder="********"
                        maxLength="30"
                        block
                        marginBottom="32px"
                        type="password"
                        value={state.pass || ""}
                        onChange={e => setState({ pass: e.target.value })}
                        onKeyPress={(e) => loginByEnter(e)}
                    />
                    <Button
                        progress={progress}
                        disabled={!validateEmail(state.email) || !state.pass || state.pass.length === 0}
                        onClick={() => login(state, setProgress)}
                    >Войти</Button>
                </Form>
            </Wrapper>
        </Screen>
    )
}

export default Login;
