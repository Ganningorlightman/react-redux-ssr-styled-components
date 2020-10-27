import React from "react";

const Html = ({ content, preloadState, helmet = {}, scripts, styles, styleTags }) => {
    const { base, link, meta, script, style, title, htmlAttributes, bodyAttributes } = helmet;
    const htmlAttrs = htmlAttributes && htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes && bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
            <head>
                {preloadState && <script async={true} dangerouslySetInnerHTML={{
                    __html: `window.preloadState = ${JSON.stringify(preloadState)};\ndelete window.__INITIAL_STATE__; `
                }}/>}

                {base && base.toComponent()}
                {title && title.toComponent()}
                {meta && meta.toComponent()}
                {link && link.toComponent()}

                {script && script.toComponent()}
                {style && style.toComponent()}
                {styles}
                {styleTags}
            </head>
            <body {...bodyAttrs}>
                <div id="root" className="root" key="root" dangerouslySetInnerHTML={{ __html: content }} />
                {scripts}
            </body>
        </html>
    )
};

export default Html;