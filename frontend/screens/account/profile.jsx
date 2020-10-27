import React, { useState, useEffect } from "react";
import * as Actions from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import Screen from "../../components/screen";
import { Input, Button, Dropdown } from "react-base-guide";

const Form = styled.section`
  max-width: 500px;
`;

const save = async (state) => {
    const data = await axios.post(routing.posts.account.save, { user: state });
    alert(data ? "Изменения сохранены" : "Изменения не сохранены");
};

const Profile = ({ account, actions, match }) => {
    const [ state, setAllState ] = useState(account.user);
    const setState = obj => setAllState({ ...state, ...obj });

    return (
        <Screen title="Профиль" match={match} showMenu={false}>
            <Form>
                <Input
                    disabled
                    label="Имя"
                    value={state.firstName || ""}
                    onChange={e => setState({ firstName: e.target.value })}
                    block
                    marginBottom="24px"
                />
                <Input
                    disabled
                    label="Фамилия"
                    value={state.lastName || ""}
                    onChange={e => setState({ lastName: e.target.value })}
                    block
                    marginBottom="24px"
                />
                <Input
                    label="Отчество"
                    value={state.patronymic || ""}
                    onChange={e => setState({ patronymic: e.target.value })}
                    disabled
                    block
                    marginBottom="24px"
                />
                <Input
                    disabled
                    label="Email"
                    type="email"
                    value={state.email || ""}
                    onChange={e => setState({ email: e.target.value })}
                    block
                    marginBottom="24px"
                />
                <Input
                    label="Активность"
                    value={state.isActive ? "Активен" : "Не активен"}
                    onChange={() => {}}
                    block
                    disabled
                    marginBottom="24px"
                />
                <Input
                    label="Телефон"
                    type="phone"
                    value={state.phone || ""}
                    onChange={e => setState({ phone: e.target.value })}
                    block
                    marginBottom="24px"
                />
                <Dropdown
                    label="Тема"
                    block
                    marginBottom="48px"
                    rows={[
                        {
                            value: "Светлая",
                            selected: !state.theme || state.theme === "default",
                            onClick: () => {
                                setState({ theme: "default" });
                                actions.setTheme(state, "default");
                            }
                        },
                        {
                            value: "Темная",
                            selected: state.theme === "dark",
                            onClick: () => {
                                setState({ theme: "dark" });
                                actions.setTheme(state, "dark");
                            }
                        }
                    ]}
                />
            </Form>

            <Button onClick={() => save(state)} marginRight="15px">Сохранить</Button>
            <Button onClick={actions.logout} secondary>Выйти</Button>
        </Screen>
    )
};

export default connect(
    state => ({ account: state.account }),
    dispatch => ({ actions: bindActionCreators(Actions, dispatch) }))(Profile);
