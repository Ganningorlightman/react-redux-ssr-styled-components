import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import Html from "./html.jsx";

import path from "path";
import createStore from "../../../frontend/store/create-store";
import Screens from "../../../frontend/screens";
import {decode} from "../jwt";

const sheet = new ServerStyleSheet();
const statsFile = path.resolve("./public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

const helmetContext = {};

/**
 * Отрендерить html относительно url запроса. (SSR)
 * preloadState: Начальное состояние поля в redux.
 */
const render = (req, preloadState = {}) => {
    preloadState.account = { user: decode(req.cookies.auth) };

    const store = createStore(preloadState);
    const content = renderToString(
        extractor.collectChunks(
            <ChunkExtractorManager extractor={extractor}>
                <StyleSheetManager sheet={sheet.instance}>
                    <HelmetProvider context={helmetContext}>
                        <Provider store={store}>
                            <StaticRouter location={req.url} context={{}}>
                                <Screens />
                            </StaticRouter>
                        </Provider>
                    </HelmetProvider>
                </StyleSheetManager>
            </ChunkExtractorManager>
        )
    );

    const { helmet } = helmetContext;
    const styleTags = sheet.getStyleElement();

    let scripts = extractor.getScriptElements();
    let styles = extractor.getStyleElements();

    let html = <Html
        helmet={helmet}
        preloadState={preloadState}
        scripts={scripts}
        styles={styles}
        styleTags={styleTags}
        content={content}
    />;

    return "<!DOCTYPE html>" + renderToString(html);
};

export default render;
