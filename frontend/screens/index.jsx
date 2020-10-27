import React from "react";
import routing from "../../routing.config";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import Layout from "./layout";

const Main = loadable(() => import(/* webpackChunkName: "main-screen" */ "./main"));
const Login = loadable(() => import(/* webpackChunkName: "account" */ "./account/login"));
const Profile = loadable(() => import(/* webpackChunkName: "account" */ "./account/profile"));


const Router = () => (
    <Layout>
        <Switch>
            <Route exact path={routing.pages.main} component={Main} />
            <Route exact path={routing.pages.account.login} component={Login} />
            <Route exact path={routing.pages.account.profile} component={Profile} />
        </Switch>
    </Layout>
);

export default Router;
