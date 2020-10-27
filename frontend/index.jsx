import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import store from "./store"
import Screens from "./screens";

loadableReady(() => {
    hydrate(
        <HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Screens />
                </BrowserRouter>
            </Provider>
        </HelmetProvider>,
        document.getElementById("root")
    );
});