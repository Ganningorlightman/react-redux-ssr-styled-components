import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Themes from "react-base-guide/frontend/themes";
import Toast from "react-base-guide/frontend/components/toast"
import Meta from "./meta-tags";
import Header from "./header";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
    background: ${p => p.theme.colors.background};
    padding-top: 60px;
    
    @media(max-width: ${p => p.theme.screens.tablet}) {
        padding-top: 50px;
    }

    ::selection {
        background-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.background};
    }
    @media print {
        height: auto;
        overflow: visible;
        padding-top: 0;
    }
`;

const LayoutContent = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex: 1;
    height: 100%;
`;

const Layout = ({ children, account }) => {
    const Theme = Themes[(account.user && account.user.theme) || "default"];
    const [toast, setToast] = useState(null);
    useEffect(() => {
        window.alert = (text, type) => setToast({ text, type });
    }, []);

    return (
        <Theme>
            <LayoutWrapper>
                <Header user={account.user} />

                <LayoutContent>
                    <Meta />
                    {children}
                </LayoutContent>

                {toast && <Toast
                    close={() => setToast(null)}
                    error={toast.type === "error"}
                    success={toast.type === "success"}
                >
                    {toast.text}
                </Toast>}
            </LayoutWrapper>
        </Theme>
    )
};

export default connect(state => ({ account: state.account }), () => ({}))(Layout);
